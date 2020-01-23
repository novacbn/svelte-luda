<script context="module">
    import {string_guard} from "../../actions/element";
    import {NUMERICAL_SIZE_NAMES} from "../../util/luda";

    /**
     * Represents the Svelte Action for assigning validated size classes
     */
    const size_guard = string_guard({
        property: "Header.size",
        format: "h%s",
        enum: [
            NUMERICAL_SIZE_NAMES.one,
            NUMERICAL_SIZE_NAMES.two,
            NUMERICAL_SIZE_NAMES.three,
            NUMERICAL_SIZE_NAMES.four,
            NUMERICAL_SIZE_NAMES.five,
            NUMERICAL_SIZE_NAMES.six
        ]
    });
</script>

<script>
    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../actions/element";

    let _class = "";

    export let href = "";
    export let size = "";

    export {_class as class};

    $: if (!href) size_guard(size, true);
</script>

<!--
    NOTE:
        Yes this is a lot of tedious and repetive code, but the
        end-developers should be allowed to make header links simply
-->

{#if href}
    <a
        class={_class}
        {href}
        on:click
        use:size_guard={size}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}>
        <slot />
    </a>
{:else if size === NUMERICAL_SIZE_NAMES.one}
    <h1 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h1>
{:else if size === NUMERICAL_SIZE_NAMES.two}
    <h2 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h2>
{:else if size === NUMERICAL_SIZE_NAMES.three}
    <h3 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h3>
{:else if size === NUMERICAL_SIZE_NAMES.four}
    <h4 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h4>
{:else if size === NUMERICAL_SIZE_NAMES.five}
    <h5 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h5>
{:else if size === NUMERICAL_SIZE_NAMES.six}
    <h6 class={_class} use:html5_passthrough={$$props} use:luda_classes={$$props}>
        <slot />
    </h6>
{/if}
