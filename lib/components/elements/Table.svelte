<script>
    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../actions/element";

    let _class = "";

    export let border = false;
    export let hover = false;
    export let nowrap = false;
    export let stripes = false;

    export {_class as class};

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
    NOTE: It's interesting that instead of a `.table` class on the base `<table>` element,
    it's instead a parent `<div>` container. Maybe to enable `.table-nowrap` more easily?
-->
<div
    class="{table_class}
    {_class}"
    class:table-hover={hover}
    class:table-nowrap={nowrap}
    use:html5_passthrough={$$props}
    use:luda_classes={$$props}>
    <table>
        <slot />
    </table>
</div>
