<script context="module">
    import {select_prefix} from "../../util/guards";
    import {COLOR_NAMES, SIZE_NAMES} from "../../util/luda";

    /**
     *
     */
    export const BUTTON_COLOR_NAMES = [
        COLOR_NAMES.danger,
        COLOR_NAMES.dark,
        COLOR_NAMES.light,
        COLOR_NAMES.primary,
        COLOR_NAMES.secondary
    ];

    /**
     *
     */
    export const BUTTON_SIZE_NAMES = [SIZE_NAMES.large, SIZE_NAMES.small];

    const color_guard = select_prefix("Button.color", "btn-", BUTTON_COLOR_NAMES, true);
    const color_text_guard = select_prefix("Button.color", "btn-text-", BUTTON_COLOR_NAMES, true);
    const color_hollow_guard = select_prefix(
        "Button.color",
        "btn-hollow-",
        BUTTON_COLOR_NAMES,
        true
    );

    const size_guard = select_prefix("Button.size", "btn-", BUTTON_SIZE_NAMES, true);
</script>

<script>
    import {parse_utility} from "../../util/luda";

    let _class = "";
    export let id = "";
    export let style = "";

    export let active = false;
    export let disabled = false;
    export let color = COLOR_NAMES.primary;
    export let href = "";
    export let hollow = false;
    export let fluid = false;
    export let readonly = false;
    export let size = "";
    export let target = "";
    export let text = false;

    export let checkbox = false;
    export let file = false;
    export let radio = false;

    export let multiple = false;
    export let name = "";
    export let value = "";

    export {_class as class};

    $: active_class = active ? "btn-active" : "";
    $: fluid_class = fluid ? "btn-fluid" : "";
    $: size_class = size ? size_guard(size) : "";

    let color_class = "";
    $: {
        if (hollow) color_class = color_hollow_guard(color);
        else if (text) color_class = color_text_guard(color);
        else color_class = color_guard(color);
    }
</script>

{#if checkbox}
    <div
        class="btn-check {active_class}
        {color_class}
        {fluid_class}
        {size_class}
        {parse_utility($$props)}
        {_class}"
        {...disabled ? {disabled: ''} : {}}
        {...readonly ? {readonly: ''} : {}}>
        <input type="checkbox" {id} {name} {readonly} {value} bind:checked={active} />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if file}
    <div
        class="btn-file {active_class}
        {color_class}
        {fluid_class}
        {size_class}
        {parse_utility($$props)}
        {_class}"
        {...disabled ? {disabled: ''} : {}}>
        <input type="file" {disabled} {id} {multiple} {name} />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if radio}
    <div
        class="btn-radio {active_class}
        {color_class}
        {fluid_class}
        {size_class}
        {parse_utility($$props)}
        {_class}"
        {...disabled ? {disabled: ''} : {}}
        {...readonly ? {readonly: ''} : {}}>
        <input type="radio" {disabled} {id} {name} {readonly} {value} bind:group={active} />

        <label for={id}>
            <slot />
        </label>
    </div>
{:else if href}
    <a
        class="btn {active_class}
        {color_class}
        {fluid_class}
        {size_class}
        {parse_utility($$props)}
        {_class}"
        {...disabled ? {disabled: ''} : {}}
        {href}
        {id}
        {target}
        {style}
        on:click>
        <slot />
    </a>
{:else}
    <button
        class="btn {active_class}
        {color_class}
        {fluid_class}
        {size_class}
        {parse_utility($$props)}
        {_class}"
        {disabled}
        {id}
        {style}
        on:click>
        <slot />
    </button>
{/if}
