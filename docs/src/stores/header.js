const {cancelIdleCallback, requestIdleCallback} = window;

const {collection} = window.luda;

import {get_search_params, get_url, update_search_param} from "../util/browser";
import {trim} from "../util/string";

/**
 * NOTE:
 *  I know this file can probably be redone in a more concise methodlogy / format,
 *  was just trying to iron-out functionality and integration with Svelte first
 */

/**
 * Represents the options passed into `IntersectionObserver`
 */
const OBSERVER_OPTIONS = {
    rootMargin: "-40% 0px -40% 0px",
    threshold: 1
};

/**
 * Returns the current value of `?header=`
 */
export function get_active_id() {
    const search_params = get_search_params();

    return search_params.get("header");
}

/**
 * Returns the formatted `?header=` URL for the current pathname
 * @param {*} id
 */
export function get_header_url(id) {
    const url = get_url();
    const pathname = trim(url.pathname, "/");

    return `#${pathname}?header=${id}`;
}

/**
 * Returns a Svelte Store for managing the documentation headers, and scrolling to changes of `?header=`
 */
export function header() {
    /**
     * IMPLEMENTATION NOTE: Since we're utilizing an IntersectionObserver, it makes sense to
     * centralize all the visibility state within the Store. Rather than in the `DocsHeader` Components.
     */

    let observer;
    let observer_identifier;
    let observer_skip = true;
    let select_item;
    let headers = [];
    let id = get_active_id();

    /**
     * Scrolls to the header with the given `id`, defaults to current
     */
    function scroll_header(_id = id) {
        const element = document.querySelector(`#${_id}`);
        if (element) element.scrollIntoView();
    }

    /**
     * Selects the new active header link when the `?header=` value changes
     */
    function on_hash_change() {
        /**
         * IMPLEMENTATION NOTE: By listening to `hashchange`, we can respond to `<a>` links
         * easily, to support those, we need to scroll to the target and then make the
         * target both the active header link and visible one in sidebar. Overriding the IntersectionObserver
         */

        const new_id = get_active_id();

        if (id !== new_id) {
            scroll_header(new_id);
            select_item({id: new_id}, ["active", "visible"]);

            id = new_id;
        }
    }

    const store = collection(headers, () => {
        // Since we need to globally listen to the `hashchange` event,
        // we need to be able to attach it with the store
        window.addEventListener("hashchange", on_hash_change);

        return () => {
            window.removeEventListener("hashchange", on_hash_change);
        };
    });

    const {find_item, get_items, map_items, push_item, set, subscribe, update, update_item} = store;
    select_item = store.select_item;

    /**
     * Refreshes the `IntersectionObserver` whenever a new header link is added
     */
    function on_new_link() {
        // We need to wait until the Browser is idle, so all
        // the header links were rendered to the DOM
        if (observer_identifier) cancelIdleCallback(observer_identifier);

        observer_identifier = requestIdleCallback(() => {
            if (!observer) return;
            observer.disconnect();

            for (const link of headers) {
                const element = document.querySelector("#" + link.id);

                if (element) observer.observe(element);
            }
        });
    }

    observer = new IntersectionObserver((entries) => {
        // We need to wait for the first run to finish,
        // that way readers aren't disoriented with the sidebar
        if (observer_skip) {
            observer_skip = false;
            return;
        }

        let visible_entry;
        for (const entry of entries) {
            if (entry.isIntersecting) {
                visible_entry = entry;
                break;
            }
        }

        if (visible_entry) select_item({id: visible_entry.target.id}, "visible");
    }, OBSERVER_OPTIONS);

    subscribe((value) => {
        /**
         * IMPLEMENTATION NOTE: Like with our `hashchange` event listener, we also
         * want to support updating the `.active` property of a link within the Store.
         * We can re-use the `hashchange` listener and just update the URL and have it
         * do the dirty work, if our cached active header link doesn't match the new one
         */

        headers = value;

        const item = find_item({active: true});
        if (item && get_active_id() !== item.id) update_search_param("header", item.id);
    });

    /**
     * Pushes the item into the links, returning a removal callback
     * @param {*} link
     */
    function push_link(link) {
        const active = link.id === id;
        const href = get_header_url(link.id);

        const ret = push_item({...link, visible: active, active, href});

        // We need to refresh `IntersectionObserver` whenever we add new links
        on_new_link();
        return ret;
    }

    return {
        push_link,
        set,
        scroll_header,
        subscribe,
        update,
        find_link: find_item,
        map_links: map_items,
        get_links: get_items,
        select_link: select_item,
        update_link: update_item
    };
}
