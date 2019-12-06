<script context="module">
    import {select_prefix} from "../../../util/guards";
    import {ALIGN_ITEMS_NAMES, JUSTIFY_CONTENT_NAMES, SCREEN_SHORT_NAMES} from "../../../util/luda";

    /**
     *
     */
    export const GRID_ALIGN_NAMES = [
        ALIGN_ITEMS_NAMES.center,
        ALIGN_ITEMS_NAMES.end,
        ALIGN_ITEMS_NAMES.start
    ];

    /**
     *
     */
    export const GRID_JUSTIFY_NAMES = [
        JUSTIFY_CONTENT_NAMES.around,
        JUSTIFY_CONTENT_NAMES.between,
        JUSTIFY_CONTENT_NAMES.center,
        JUSTIFY_CONTENT_NAMES.end,
        JUSTIFY_CONTENT_NAMES.start
    ];

    const align_guard = select_prefix("Grid.align", "ai-", "", GRID_ALIGN_NAMES, true);
    const align_medium_guard = select_prefix(
        "Grid.align_m",
        "ai-",
        SCREEN_SHORT_NAMES.medium,
        GRID_ALIGN_NAMES,
        true
    );
    const align_large_guard = select_prefix(
        "Grid.align_l",
        "ai-",
        SCREEN_SHORT_NAMES.large,
        GRID_ALIGN_NAMES,
        true
    );

    const justify_guard = select_prefix("Grid.justify", "jc-", "", GRID_JUSTIFY_NAMES, true);
    const justify_medium_guard = select_prefix(
        "Grid.justify_m",
        "jc-",
        SCREEN_SHORT_NAMES.medium,
        GRID_JUSTIFY_NAMES,
        true
    );
    const justify_large_guard = select_prefix(
        "Grid.justify_l",
        "jc-",
        SCREEN_SHORT_NAMES.large,
        GRID_JUSTIFY_NAMES,
        true
    );
</script>

<script>
    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export let edge = false;

    export let align = "";
    export let align_m = "";
    export let align_l = "";

    export let justify = "";
    export let justify_m = "";
    export let justify_l = "";

    export {_class as class};

    $: grid_class = edge ? "grid-edge" : "grid";

    $: align_class = align ? align_guard(align) : "";
    $: align_m_class = align_m ? align_guard(align_m) : "";
    $: align_l_class = align_l ? align_guard(align_l) : "";

    $: justify_class = justify ? justify_guard(justify) : "";
    $: justify_m_class = justify_m ? justify_guard(justify_m) : "";
    $: justify_l_class = justify_l ? justify_guard(justify_l) : "";
</script>

<div class="{grid_class} {justify_class} {parse_utility($$props)} {_class}" {style}>
    <slot />
</div>
