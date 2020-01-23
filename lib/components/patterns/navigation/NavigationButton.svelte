<script context="module">
    import {select_format} from "../../../util/guards";
    import {COLOR_NAMES} from "../../../util/luda";

    /**
     *
     */
    export const NAVIGATION_BUTTON_COLOR_NAMES = [
        COLOR_NAMES.danger,
        COLOR_NAMES.dark,
        COLOR_NAMES.light,
        COLOR_NAMES.primary,
        COLOR_NAMES.secondary
    ];

    const color_guard = select_format(
        "Button.color",
        "btn-text-%s",
        NAVIGATION_BUTTON_COLOR_NAMES,
        true
    );
</script>

<script>
    import {getContext} from "svelte";

    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    import {NAVIGATION_CONTEXT_SYMBOL} from "./Navigation.svelte";

    let _class = "";

    export let close = false;
    export let color = COLOR_NAMES.light;

    export {_class as class};

    const context = getContext(NAVIGATION_CONTEXT_SYMBOL);

    $: color_class = color_guard(color);
    $: nav_class = close ? "nav-close" : "nav-open";

    /**
     * Handles updating the state of the `NavigationButton` Component
     */
    function on_click(event) {
        if (!context) return;

        event.preventDefault();

        close = !close;
        context.state.set(close);
    }
</script>

<button
    class="{nav_class} btn btn-ico {color_class}
    {get_utilities($$props)}
    {_class}"
    {...get_attributes($$props)}
    on:click={on_click}>
    {#if close}
        <i class="ico ico-cross" />
    {:else}
        <i class="ico ico-menu" />
    {/if}
</button>
