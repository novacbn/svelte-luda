<script context="module">
    import {select_format, select_guard} from "../../util/guards";
    import {COLOR_NAMES} from "../../util/luda";

    /**
     * Represents the text colors available to the `Header` Component
     */
    export const HEADER_COLOR_NAMES = [
        COLOR_NAMES.danger,
        COLOR_NAMES.dark,
        COLOR_NAMES.emphasis,
        COLOR_NAMES.inverse_muted,
        COLOR_NAMES.inverse_main,
        COLOR_NAMES.inverse_emphasis,
        COLOR_NAMES.light,
        COLOR_NAMES.main,
        COLOR_NAMES.muted,
        COLOR_NAMES.primary,
        COLOR_NAMES.secondary
    ];

    /**
     * Represents the text sizes available to the `Header` Component
     */
    export const HEADER_SIZE_VALUES = ["1", "2", "3", "4", "5", "6"];

    const color_guard = select_format("Header.color", "c-%s", HEADER_COLOR_NAMES, true);
    const size_guard = select_guard("Header.size", HEADER_SIZE_VALUES);
</script>

<script>
    import {get_attributes} from "../../util/browser";
    import {get_utilities} from "../../util/luda";

    let _class = "";

    export let color = "";
    export let inline = false;
    export let size = "";

    export {_class as class};

    $: color_class = color ? color_guard(color) : "";
    $: inline_class = inline ? "typo-inline" : "";
    $: header_size = size ? size_guard(size) : "1";
</script>

{#if header_size === '1'}
    <h1
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h1>
{:else if header_size === '2'}
    <h2
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h2>
{:else if header_size === '3'}
    <h3
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h3>
{:else if header_size === '4'}
    <h4
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h4>
{:else if header_size === '5'}
    <h5
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h5>
{:else if header_size === '6'}
    <h6
        class="{color_class}
        {inline_class}
        {get_utilities($$props)}
        {_class}"
        {...get_attributes($$props)}>
        <slot />
    </h6>
{/if}
