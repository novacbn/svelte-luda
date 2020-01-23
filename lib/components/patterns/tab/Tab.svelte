<script context="module">
    import {writable} from "svelte/store";
    import {collection} from "svelte-commons/lib/stores/shared";

    /**
     * Represents the `Symbol` used to access the `Tabs` Component's runtime store
     */
    export const TAB_CONTEXT_SYMBOL = Symbol("luda-tabs");

    /**
     * Returns the context used for managing tabs and state
     */
    function make_context(default_selected = "") {
        const selected = writable(default_selected);
        const tabs = collection([]);

        return {
            selected,
            tabs
        };
    }
</script>

<script>
    import {setContext} from "svelte";

    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../../actions/element";

    import TabIndicators from "./TabIndicators.svelte";

    let _class = "";

    export let nocontext = false;

    export {_class as class};

    // We should be allow the end-developers to specify
    // if they want to handle state manually
    if (!nocontext) {
        const context = make_context();

        setContext(TAB_CONTEXT_SYMBOL, context);
    }
</script>

<div class="tab {_class}" use:html5_passthrough={$$props} use:luda_classes={$$props}>
    <slot name="indicators">
        <TabIndicators />
    </slot>

    <slot />
</div>
