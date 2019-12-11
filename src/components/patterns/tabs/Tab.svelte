<script context="module">
    /**
     * Represents the `Symbol` used to access the `Tabs` Component's runtime store
     */
    export const TAB_CONTEXT_SYMBOL = Symbol("luda-tabs");
</script>

<script>
    import {setContext} from "svelte";
    import {writable} from "svelte/store";

    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export {_class as class};

    const state = writable([]);

    /**
     * Returns a copy of the `Tabs` Component's state, preserving immutability
     */
    function get_tabs() {
        const tabs = $state;
        return tabs.map((tab) => {
            return {...tab};
        });
    }

    const context = {
        state: state,

        /**
         * Returns the currently selected tab title
         */
        get_selected() {
            for (const tab of $state) {
                if (tab.active) return tab.title;
            }

            return null;
        },

        /**
         * Pushes new tab data into the `Tabs` Component's state, returning a deconstructor function
         */
        push_tab(title) {
            const tabs = get_tabs();

            tabs.push({title, active: false});
            $state = tabs;

            return {
                destroy: () => {
                    const tabs = $state;

                    const index = tabs.findIndex((tab) => tab.title === title);
                    const tab = tabs[index];

                    tabs.splice(index, 1);
                    if (tab.active && tabs.length > 0) tabs[0].active = true;

                    $state = tabs;
                }
            };
        },

        /**
         * Selects a new active tab based on a supplied title
         */
        select_tab(title) {
            let tabs = get_tabs();

            const index = tabs.findIndex((tab) => tab.title === title);
            if (index < 0) {
                throw ReferenceError(
                    `bad argument #1 to 'TabsContext.select_tab' (invalid title '${title}')`
                );
            }

            tabs = tabs.map((tab) => {
                return {...tab, active: tab.title === title};
            });

            $state = tabs;
        }
    };

    setContext(TAB_CONTEXT_SYMBOL, context);
</script>

<div class="tab {parse_utility($$props)} {_class}" {style}>
    <slot />
</div>
