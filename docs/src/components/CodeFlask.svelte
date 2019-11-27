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
    :global(.codeflask__code) {
        background-color: inherit;
        color: inherit;
        line-height: inherit;
    }
</style>

<div class={_class} {style} bind:this={editor_element} />
