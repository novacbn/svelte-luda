<script context="module">
    import {select_format, select_format_signed} from "../../../util/guards";
    import {ALIGN_SELF_NAMES, GRID_POINTS, SCREEN_SHORT_NAMES} from "../../../util/luda";

    /**
     * Represents the alignment options that an individual `GridItem` can have
     */
    export const GRID_ITEM_ALIGN_NAMES = [
        ALIGN_SELF_NAMES.center,
        ALIGN_SELF_NAMES.end,
        ALIGN_SELF_NAMES.start
    ];

    /**
     * Represents the range of offset spacing a `GridItem` can have
     */
    export const GRID_ITEM_OFFSET_NAMES = [
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
        GRID_POINTS.eleven
    ];

    /**
     * Represents the range of custom display ordering a `GridItem` can have
     */
    export const GRID_ITEM_ORDER_NAMES = [
        GRID_POINTS.one,
        GRID_POINTS.two,
        GRID_POINTS.three,
        GRID_POINTS.four,
        GRID_POINTS.five,
        GRID_POINTS.six
    ];

    /**
     * Represents the range of grid children a `GridItem` can span
     */
    export const GRID_ITEM_SPAN_NAMES = [
        GRID_POINTS.auto,
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

    const align_guard = select_format("GridItem.align", "as-%s", GRID_ITEM_ALIGN_NAMES, true);
    const align_m_guard = select_format(
        "GridItem.align_m",
        "as-%s-" + SCREEN_SHORT_NAMES.medium,
        GRID_ITEM_ALIGN_NAMES,
        true
    );
    const align_l_guard = select_format(
        "GridItem.align_l",
        "as-%s-" + SCREEN_SHORT_NAMES.large,
        GRID_ITEM_ALIGN_NAMES,
        true
    );

    const order_guard = select_format_signed("GridItem.order", "od-", "on-", GRID_ITEM_ORDER_NAMES);
    const order_m_guard = select_format_signed(
        "GridItem.order_m",
        "od-%s-" + SCREEN_SHORT_NAMES.medium,
        "on-%s-" + SCREEN_SHORT_NAMES.medium,
        GRID_ITEM_ORDER_NAMES
    );
    const order_l_guard = select_format_signed(
        "GridItem.order_l",
        "od-%s-" + SCREEN_SHORT_NAMES.large,
        "on-%s-" + SCREEN_SHORT_NAMES.large,
        GRID_ITEM_ORDER_NAMES
    );

    const offset_guard = select_format("GridItem.offset", "offset-%s", GRID_ITEM_OFFSET_NAMES);
    const offset_m_guard = select_format(
        "GridItem.offset_m",
        "offset-%s-" + SCREEN_SHORT_NAMES.medium,
        GRID_ITEM_OFFSET_NAMES
    );
    const offset_l_guard = select_format(
        "GridItem.offset_l",
        "offset-%s-" + SCREEN_SHORT_NAMES.large,
        GRID_ITEM_OFFSET_NAMES
    );

    const span_guard = select_format("GridItem.span", "col-%s", GRID_ITEM_SPAN_NAMES);
    const span_medium_guard = select_format(
        "GridItem.span_m",
        "col-%s-" + SCREEN_SHORT_NAMES.medium,
        GRID_ITEM_SPAN_NAMES
    );
    const span_large_guard = select_format(
        "GridItem.span_l",
        "col-%s-" + SCREEN_SHORT_NAMES.large,
        GRID_ITEM_SPAN_NAMES
    );
</script>

<script>
    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    let _class = "";

    export let align = "";
    export let align_m = "";
    export let align_l = "";

    export let offset = "";
    export let offset_m = "";
    export let offset_l = "";

    export let order = "";
    export let order_m = "";
    export let order_l = "";

    export let span = "";
    export let span_m = "";
    export let span_l = "";

    export {_class as class};

    // NOTE: I know this all looks ugly, but currently is the way I see
    // on how to manage screen breaks and such
    $: align_class = align ? align_guard(align) : "";
    $: align_m_class = align_m ? align_m_guard(align_m) : "";
    $: align_l_class = align_l ? align_l_guard(align_l) : "";

    $: offset_class = offset ? offset_guard(offset) : "";
    $: offset_m_class = offset_m ? offset_m_guard(offset_m) : "";
    $: offset_l_class = offset_l ? offset_l_guard(offset_l) : "";

    $: order_class = order ? order_guard(order) : "";
    $: order_m_class = order_m ? order_m_guard(order_m) : "";
    $: order_l_class = order_l ? order_l_guard(order_l) : "";

    $: span_class = span ? span_guard(span) : "";
    $: span_m_class = span_m ? span_m_guard(span_m) : "";
    $: span_l_class = span_l ? span_l_guard(span_l) : "";
</script>

<div
    class="{span_class}
    {span_m_class}
    {span_l_class}
    {align_class}
    {align_m_class}
    {align_l_class}
    {offset_class}
    {offset_m_class}
    {offset_l_class}
    {order_class}
    {order_m_class}
    {order_l_class}
    {get_utilities($$props)}
    {_class}"
    {...get_attributes($$props)}>
    <slot />
</div>
