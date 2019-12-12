<script context="module">
    /**
     * Represents the `Symbol` used to access the `Tabs` Component's runtime store
     */
    export const TAB_CONTEXT_SYMBOL = Symbol("luda-tabs");

    /**
     * Returns a new runtime context for the `Tab` Component, that provides methods for
     * interacting with an immutable state
     */
    function make_context(tabs = []) {
        /**
         * IMPLEMENTATION NOTE:
         *  Using an `Object[]` was chosen instead of a faster `Object<string, boolean>` implementation so end-developers
         *  can provide additional metadata like button colors or other things, e.g. `{active: boolean, title: string, color: string}`
         */

        // We need to subscribe to the store to cache new states,
        // since we're not running in the default `<script>` context
        const state = writable(tabs);
        state.subscribe((value) => (tabs = value));

        return {
            state: state,

            /**
             * Returns a copy of the found tab object via the supplied title, preserving immutability
             */
            find_tab(title) {
                for (const tab of tabs) {
                    if (tab.title === title) return {...tab};
                }

                return null;
            },

            /**
             * Returns a copy of the currently selected tab object, preserving immutability
             */
            get_tab() {
                for (const tab of tabs) {
                    if (tab.active) return {...tab};
                }

                return null;
            },

            /**
             * Returns a copy of the `Tabs` Component's state, preserving immutability
             */
            get_tabs() {
                return tabs.map((tab) => {
                    return {...tab};
                });
            },

            /**
             * Pushes new tab data into the `Tabs` Component's state, returning a deconstructor function
             */
            push_tab(data) {
                // We need to use a copy instead of mutating the current array
                const tabs = this.get_tabs();
                const {title} = data;

                tabs.push({...data, active: false});
                state.set(tabs);

                // We need to make sure `.destroy()` cannot be called more than
                // one time, so we need to provide a boolean flag
                let destroyed = false;
                return {
                    destroy: () => {
                        // Skip if `.destroy()` was called before
                        if (destroyed) return;

                        const index = tabs.findIndex((tab) => tab.title === title);
                        const tab = tabs[index];

                        // After removing the tab, if there are any tabs remaining
                        // we should default back to the first one being active
                        tabs.splice(index, 1);
                        if (tab.active && tabs.length > 0) tabs[0].active = true;

                        state.set(tab);
                        destroyed = true;
                    }
                };
            },

            /**
             * Selects a new active tab based on a supplied title
             */
            select_tab(title) {
                const tab = tabs.find((tab) => tab.title === title);
                if (!tab) {
                    throw ReferenceError(
                        `bad argument #1 to 'TabsContext.select_tab' (invalid title '${title}')`
                    );
                }

                tabs = tabs.map((tab) => {
                    return {...tab, active: tab.title === title};
                });

                state.set(tabs);
            }
        };
    }
</script>

<script>
    import {setContext} from "svelte";
    import {writable} from "svelte/store";

    import {parse_utility} from "../../../util/luda";

    import TabIndicators from "./TabIndicators.svelte";

    let _class = "";
    export let style = "";

    export let nocontext = false;

    export {_class as class};

    // We should be able to allow the end-developers to specify if
    // they want to handle state manually.
    if (!nocontext) {
        const context = make_context();
        setContext(TAB_CONTEXT_SYMBOL, context);
    }
</script>

<div class="tab {parse_utility($$props)} {_class}" {style}>
    <slot name="indicators">
        <TabIndicators />
    </slot>

    <slot />
</div>
