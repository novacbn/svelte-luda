<script>
    import {parse_utility} from "../../util/luda";

    let _class = "";
    export let style = "";

    export let border = false;
    export let hover = false;
    export let nowrap = false;
    export let stripes = false;

    export {_class as class};

    $: hover_class = hover ? "table-hover" : "";
    $: wrap_class = nowrap ? "table-nowrap" : "";

    let table_class = "";
    $: {
        // NOTE: I know it would make more sense for striped tables to be a modifier on
        // the `.table` class, but this is just how Luda does things in the docs
        if (border && stripes) table_class = "table-border";
        else if (border) table_class = "table-border table-stripless";
        else if (stripes) table_class = " table";
        else table_class = "table table-stripless";
    }
</script>

<!--
    NOTE: it's interesting that instead of a `.table` class on the base `<table>` element,
    it's instead a parent `<div>` container. maybe to enable `.table-nowrap` more easily?
-->
<div class="{table_class} {hover_class} {wrap_class} {parse_utility($$props)} {_class}" {style}>
    <table>
        <slot />
    </table>
</div>
