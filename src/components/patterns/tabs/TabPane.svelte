<script>
    import {getContext, onDestroy, onMount} from "svelte";

    import {parse_utility} from "../../../util/luda";

    import {TAB_CONTEXT_SYMBOL} from "./Tab.svelte";

    let _class = "";
    export let style = "";

    export let active = false;
    export let title = "";

    export {_class as class};

    const context = getContext(TAB_CONTEXT_SYMBOL);

    $: state = context ? context.state : state;

    let active_class = "";
    $: {
        let active_toggle = active;
        if (context) {
            // HACK: could be wrong, be we should at least need this reference so
            // the Svelte compiler knows to be reactive with the following code block
            $state;

            active_toggle = context.get_selected() === title;
        }

        active_class = active_toggle ? "tab-pane-active" : "";
    }

    let destroy;
    $: {
        if (destroy) {
            destroy();
            destroy = null;
        }

        if (context) destroy = context.push_tab(title).destroy;
    }

    $: {
        if (context && active) context.select_tab(title);
    }

    onDestroy(() => {
        if (destroy) destroy();
    });
</script>

<div class="tab-pane {active_class} {parse_utility($$props)} {_class}" {style}>
    <slot />
</div>
