<script>
    import CodeFlask from "codeflask";

    let _class = "";
    export let style = "";

    export let language = "html";
    export let line_numbers = true;
    export let readonly = false;
    export let rtl = false;
    export let value = "";

    export {_class as class};

    let editor_element;
    let flask;

    $: options = {language, readonly, rtl, lineNumbers: line_numbers};
    $: if (flask) flask.onUpdate((code) => (value = code));
    $: if (flask) flask.updateCode(value);

    $: {
        if (flask) {
            // TODO: REMOVE PREVIOUS INSTANCE
        }

        if (editor_element) {
            flask = new CodeFlask(editor_element, options);
        }
    }
</script>

<style>
    .docs-codeflask :global(.codeflask--has-line-numbers:before),
    .docs-codeflask :global(.codeflask__lines) {
        background-color: var(--bc-muted) !important;

        z-index: 3;
    }

    .docs-codeflask :global(.codeflask__code) {
        background: inherit;
        color: inherit;
        padding: 0;
        line-height: inherit;
    }

    .docs-codeflask :global(.codeflask__flatten) {
        width: calc(100% - 40px) !important;
    }
</style>

<div class="rel docs-codeflask">
    <div class={_class} {style} bind:this={editor_element} />

    <slot />
</div>
