<script>
    import {getContext} from "svelte";

    import {parse_utility} from "../../../util/luda";

    import {NAVIGATION_CONTEXT_SYMBOL} from "./Navigation.svelte";

    let _class = "";
    export let style = "";

    export let opened = false;

    export {_class as class};

    const context = getContext(NAVIGATION_CONTEXT_SYMBOL);

    $: opened_class = opened ? "toggle-active" : "";

    if (context) context.state.subscribe((value) => (opened = value));
</script>

<!-- HACK: `data-toggle-target` is required, even if unused, so collapsed menu can be hidden by CSS -->
<div class="nav-menu {opened_class} {parse_utility($$props)} {_class}" {style} data-toggle-target>
    <slot />
</div>
