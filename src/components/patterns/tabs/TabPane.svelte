<script>
    import {getContext, onDestroy} from "svelte";

    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    import {TAB_CONTEXT_SYMBOL} from "./Tab.svelte";

    let _class = "";

    export let active = false;
    export let color = "secondary";
    export let hollow = true;
    export let title = "";

    export {_class as class};

    const context = getContext(TAB_CONTEXT_SYMBOL);

    $: state = context ? context.state : null;

    $: options = {color, hollow, title};

    let destroy;
    $: {
        // On every change to `.title`, we need to destroy the previously
        // cached tab data, and then create a new if we have context
        if (destroy) {
            destroy();
            destroy = null;
        }

        if (context) destroy = context.push_tab(options).destroy;
    }

    $: {
        // We need to update the currently selected tab
        // if the `.active` property is changed
        if (context && active) context.select_tab(title);
    }

    let active_class = "";
    $: {
        let active_toggle = active;
        if (context) {
            // HACK: could be wrong, be we should at least need this reference so
            // the Svelte compiler knows to be reactive with the following code block
            $state;

            active_toggle = context.get_tab().title === title;
        }

        active_class = active_toggle ? "tab-pane-active" : "";
    }

    onDestroy(() => {
        if (destroy) destroy();
    });
</script>

<div class="tab-pane {active_class} {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
    <slot />
</div>
