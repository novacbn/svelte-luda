<script>
    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export let submenu = false;

    export {_class as class};

    $: items_class = submenu ? "nav-sub-items" : "nav-items";
</script>

<nav class="{items_class} {parse_utility($$props)} {_class}" {style}>
    <slot />
</nav>
