import {writable} from "svelte/store";

/**
 * Returns the first array item that naively matches the predicate of `(value: T, index: number) => boolean` or `Object<string, T>`
 * @param {*} array
 * @param {*} predicate
 */
export function find_predicate(array, predicate) {
    let item;
    if (typeof predicate === "function") {
        item = array.find((item, index) => {
            return predicate({...item}, index);
        });
    } else {
        item = array.find((item) => {
            for (const key in predicate) {
                if (item[key] !== predicate[key]) return false;
            }

            return true;
        });
    }

    if (typeof item === "object") return {...item};
    return item;
}

/**
 * Returns the updated items, utilizing an updater of `(value: T) => T` or `Object<string, T>`
 * @param {*} array
 * @param {*} updater
 */
export function map_values(array, updater) {
    if (typeof updater === "function") {
        return array.map((item, index) => {
            return updater({...item}, index);
        });
    }

    return array.map((item) => {
        return {...item, ...updater};
    });
}

/**
 * Returns the updated item, utilizing an updater of `(value: T) => T` or `Object<string, T>`
 * @param {*} item
 * @param {*} updater
 */
export function update_value(item, updater) {
    if (typeof updater === "function") return updater({...item});
    return {...item, ...updater};
}

/**
 * Represents a generic implementation of an immutable reactive Svelte `writable` Store of items
 * @param {*} value
 */
export function collection(state = [], start) {
    const {subscribe, set, update} = writable(state, start);
    subscribe((value) => (state = value));

    /**
     * Returns a copy of the item that matches the supplied `predicate`
     */
    function find_item(predicate) {
        return find_predicate(state, predicate);
    }

    /**
     * Returns a copy of the current collection
     */
    function get_items() {
        return state.map((item) => {
            return {...item};
        });
    }

    /**
     * Remaps every item within the collection, using the supplied `updater`
     * @param {*} updater
     */
    function map_items(updater) {
        const items = map_values(state, updater);

        set(items);
    }

    /**
     * Pushes the item into the collection, returning a removal callback
     * @param {*} item
     */
    function push_item(item) {
        // We need to use a copy, so we don't mutate previous data
        const items = get_items();

        // Need to provide a `destroyed` flag so we don't run more than once
        let destroy;
        let destroyed = false;
        destroy = () => {
            if (destroyed) return;

            // Mutation prevention, again
            const items = get_items();

            // We need to find the item we're destroying by our cached `destroy` function reference as a unique lookup
            const index = items.findIndex((_item) => _item.destroy === destroy);
            if (index < 0) {
                throw new ReferenceError(
                    "bad dispatch to 'CollectionItem.destroy' (item not found, THIS SHOULD NEVER HAPPEN)"
                );
            }

            // Whenever we go to remove the item, allow the end-developer to supply a `.destroy` callback
            const [_item] = items.splice(index, 1);
            if (_item.ondestroy) _item.ondestroy(_item, items);

            set(items);
            destroyed = true;
        };

        items.push({...item, destroy});
        set(items);

        return destroy;
    }

    /**
     * Updates the item that matches the `predicate`, using the supplied `updater`
     * @param {*} predicate
     * @param {*} updater
     */
    function update_item(predicate, updater) {
        const item = find_predicate(state, predicate);
        if (!item) {
            throw new ReferenceError(
                "bad dispatch to 'Collection.update_item' (no items matching predicate)"
            );
        }

        item = update_value(item, updater);

        // Lastly, we need to get a copy of the current items, and then
        // replace the previous item entry
        const items = get_items();
        for (const index in items) {
            const _item = items[index];
            if (_item.destroy === item.destroy) {
                items[index] = item;
                break;
            }
        }

        set(items);
    }

    /**
     * Remaps every item within the collection, any item that matches the supplied `predicate` has their `active_property` key set to `true`
     * @param {*} predicate
     * @param {*} active_property
     */
    function select_item(predicate, active_property) {
        // NOTE: Yes, very long repeating code that code probably be cleaned up
        // but need to support both function and property based predicate, AND
        // need to support singular string and array of string selectable properties

        if (Array.isArray(active_property)) {
            if (typeof predicate === "function") {
                map_items((item, index) => {
                    const bool = predicate(item, index);
                    for (const property of active_property) item[property] = bool;

                    return item;
                });
            } else {
                map_items((item) => {
                    for (const property of active_property) item[property] = true;

                    for (const key in predicate) {
                        if (item[key] !== predicate[key]) {
                            for (const property of active_property) item[property] = false;
                            break;
                        }
                    }

                    return item;
                });
            }
        } else {
            if (typeof predicate === "function") {
                map_items((item, index) => {
                    item[active_property] = predicate(item, index);

                    return item;
                });
            } else {
                map_items((item) => {
                    item[active_property] = true;
                    for (const key in predicate) {
                        if (item[key] !== predicate[key]) {
                            item[active_property] = false;
                            break;
                        }
                    }

                    return item;
                });
            }
        }
    }

    return {
        find_item,
        get_items,
        map_items,
        push_item,
        set,
        select_item,
        subscribe,
        update,
        update_item
    };
}
