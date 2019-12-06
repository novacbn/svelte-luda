<script context="module">
    import {select_prefix} from "../../../util/guards";
    import {GRID_POINTS, SCREEN_SHORT_NAMES} from "../../../util/luda";

    /**
     *
     */
    export const GRID_ITEM_SPAN_NAMES = [
        GRID_POINTS.one,
        GRID_POINTS.two,
        GRID_POINTS.three,
        GRID_POINTS.four,
        GRID_POINTS.five,
        GRID_POINTS.six,
        GRID_POINTS.seven,
        GRID_POINTS.eight,
        GRID_POINTS.nine,
        GRID_POINTS.ten,
        GRID_POINTS.eleven,
        GRID_POINTS.twelve
    ];

    const span_guard = select_prefix("GridItem.span", "col-", "", GRID_ITEM_SPAN_NAMES);
    const span_medium_guard = select_prefix(
        "GridItem.span_m",
        "col-",
        SCREEN_SHORT_NAMES.medium,
        GRID_ITEM_SPAN_NAMES
    );
    const span_large_guard = select_prefix(
        "GridItem.span_l",
        "col-",
        SCREEN_SHORT_NAMES.large,
        GRID_ITEM_SPAN_NAMES
    );
</script>

<script>
    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export let span = "";
    export let span_m = "";
    export let span_l = "";

    export {_class as class};

    $: span_class = span ? span_guard(span) : "";
    $: span_m_class = span_m ? span_guard(span_m) : "";
    $: span_l_class = span_l ? span_guard(span_l) : "";
</script>

<div class="{span_class} {span_m_class} {span_l_class} {parse_utility($$props)} {_class}" {style}>
    <slot />
</div>
