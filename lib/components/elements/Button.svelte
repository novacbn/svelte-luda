<script context="module">
    import {string_guard} from "../../actions/element";
    import {COLOR_NAMES, TEXTUAL_SIZE_NAMES} from "../../util/luda";

    /**
     * Represents the Svelte Action for assigning hollow color classes
     */
    const color_hollow_guard = string_guard({
        property: "Button.color",
        format: "btn-hollow-%s",
        ignore_case: true,
        enum: [
            COLOR_NAMES.danger,
            COLOR_NAMES.dark,
            COLOR_NAMES.light,
            COLOR_NAMES.primary,
            COLOR_NAMES.secondary
        ]
    });

    /**
     * Represents the Svelte Action for assigning plain color classes
     */
    const color_plain_guard = string_guard({
        property: "Button.color",
        format: "btn-%s",
        ignore_case: true,
        enum: [
            COLOR_NAMES.danger,
            COLOR_NAMES.dark,
            COLOR_NAMES.light,
            COLOR_NAMES.primary,
            COLOR_NAMES.secondary
        ]
    });

    /**
     * Represents the Svelte Action for assigning text color classes
     */
    const color_text_guard = string_guard({
        property: "Button.color",
        format: "btn-text-%s",
        ignore_case: true,
        enum: [
            COLOR_NAMES.danger,
            COLOR_NAMES.dark,
            COLOR_NAMES.light,
            COLOR_NAMES.primary,
            COLOR_NAMES.secondary
        ]
    });

    /**
     * Represents the Svelte Action for assigning size classes
     */
    const size_guard = string_guard({
        property: "Button.size",
        format: "btn-%s",
        ignore_case: true,
        enum: [TEXTUAL_SIZE_NAMES.large, TEXTUAL_SIZE_NAMES.small]
    });
</script>

<script>
    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../actions/element";

    let _class = "";
    export let id = "";

    export let active = false;
    export let disabled = false;
    export let color = COLOR_NAMES.primary;
    export let href = "";
    export let hollow = false;
    export let fluid = false;
    export let group = undefined;
    export let readonly = false;
    export let size = "";
    export let text = false;

    export let checkbox = false;
    export let file = false;
    export let radio = false;

    export let multiple = false;
    export let name = "";
    export let value = "";

    export {_class as class};

    $: if (radio) active = group === value;

    let color_guard;
    $: {
        if (hollow) color_guard = color_hollow_guard;
        else if (text) color_guard = color_text_guard;
        color_guard = color_plain_guard;
    }
</script>

{#if checkbox}
    <div
        class="btn-check {_class}"
        class:btn-active={active}
        class:btn-fluid={fluid}
        use:color_guard={color}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}
        use:size_guard={size}>
        <input type="checkbox" {id} {name} {readonly} {value} bind:checked={active} />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if file}
    <div
        class="btn-file {_class}"
        class:btn-active={active}
        class:btn-fluid={fluid}
        use:color_guard={color}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}
        use:size_guard={size}>
        <input type="file" {disabled} {id} {multiple} {name} />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if radio}
    <div
        class="btn-radio {_class}"
        class:btn-active={active}
        class:btn-fluid={fluid}
        use:color_guard={color}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}
        use:size_guard={size}>
        <input type="radio" {disabled} {id} {name} {readonly} {value} bind:group />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if href}
    <a
        class="btn {_class}"
        {href}
        class:btn-active={active}
        class:btn-fluid={fluid}
        on:click
        use:color_guard={color}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}
        use:size_guard={size}>
        <slot />
    </a>
{:else}
    <button
        class="btn {_class}"
        class:btn-active={active}
        class:btn-fluid={fluid}
        on:click
        use:color_guard={color}
        use:html5_passthrough={$$props}
        use:luda_classes={$$props}
        use:size_guard={size}>
        <slot />
    </button>
{/if}
