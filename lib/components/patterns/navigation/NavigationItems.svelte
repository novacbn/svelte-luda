<script>
    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    let _class = "";

    export let submenu = false;

    export {_class as class};

    $: items_class = submenu ? "nav-sub-items" : "nav-items";
</script>

<nav class="{items_class} {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
    <slot />
</nav>
