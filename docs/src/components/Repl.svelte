<script context="module">
    // Just so you're aware, this whole file is one giant hack, so dargons beware.

    import {compile} from "svelte/compiler";

    import * as svelte from "svelte/internal";

    /**
     *
     */
    const COMPONENT_EXPORT_PATTERN = "export default Component";

    /**
     *
     */
    const COMPONENT_EXPORT_REPLACE = "return Component";

    /**
     *
     */
    const COMPONENT_FROM_PATTERN = `from "svelte/internal"`;

    /**
     *
     */
    const COMPONENT_FROM_REPLACE = "= svelte";

    /**
     *
     */
    const COMPONENT_IMPORT_PATTERN = `import {`;

    /**
     *
     */
    const COMPONENT_IMPORT_REPLACE = "const {";

    /**
     *
     */
    function format_output(output) {
        let {code} = output.js;

        // We need to replace the import / export statements with our own shims
        code = code.replace(COMPONENT_IMPORT_PATTERN, COMPONENT_IMPORT_REPLACE);
        code = code.replace(COMPONENT_FROM_PATTERN, COMPONENT_FROM_REPLACE);
        code = code.replace(COMPONENT_EXPORT_PATTERN, COMPONENT_EXPORT_REPLACE);

        // Next, we need to wrap our code in a function that can be eval'd
        return `(function (window, svelte) {
${code}
});`;
    }

    /**
     *
     */
    function compile_component(code) {
        const output = compile(code);
        const javascript = format_output(output);

        //console.log({javascript});
        return eval(javascript)(window, svelte);
    }
</script>

<script>
    const {Button} = window.luda;

    import {copy_text} from "../util/browser";
    import {debounce} from "../util/functional";
    import {compress_text} from "../util/string";

    import CodeFlask from "./CodeFlask.svelte";

    let _class = "";
    export let style = "";

    export let example = "";
    export let value = "";

    export {_class as class};

    let component;
    let generated = "";
    let preview_element;
    let textarea;

    const update_render = debounce((code, target) => {
        if (component) {
            component.$destroy();
            component = null;
        }

        const Component = compile_component(code);
        //console.log({Component});
        component = new Component({target});
    }, 250);

    function on_copy_click(event) {
        event.preventDefault();

        copy_text(value);
    }

    let href = "";
    $: {
        // TODO: replace `replace` after example stuff is completed
        if (value && value !== {}) href = `#/scratchpad?code=${compress_text(value)}`;
        else if (example) href = `#/scratchpad?example=${example}`;
    }

    $: {
        if (preview_element) {
            update_render(value, preview_element);
        }
    }
</script>

<style>
    .docs-repl :global(.docs-repl-overlay) {
        visibility: hidden;
    }

    .docs-repl:hover :global(.docs-repl-overlay) {
        visibility: visible;
    }
</style>

<div class="modal docs-repl {_class}" {style}>
    <div class="modal bc-light" bind:this={preview_element} />

    <CodeFlask class="rel w-100" style="border-top:8px solid var(--bc-muted);height:25rem;" bind:value>
        <div class="docs-repl-overlay abs-t abs-r mt-small mr-small" style="z-index:2;">
            <Button size="small" target="_blank" {href}>REPL</Button>
            <Button color="secondary" size="small" on:click={on_copy_click}>COPY</Button>
        </div>
    </CodeFlask>
</div>
