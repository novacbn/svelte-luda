<script context="module">
    // Just so you're aware, this whole file is one giant hack, so dargons beware.

    import {compile} from "svelte/compiler";

    import {
        append,
        attr,
        create_component,
        destroy_component,
        detach,
        element,
        init,
        insert,
        mount_component,
        safe_not_equal,
        set_data,
        space,
        text,
        transition_in,
        transition_out,
        SvelteComponent
    } from "svelte/internal";

    /**
     *
     */
    const SVELTE_LIB = {
        append,
        attr,
        create_component,
        destroy_component,
        detach,
        element,
        init,
        insert,
        mount_component,
        safe_not_equal,
        set_data,
        space,
        text,
        transition_in,
        transition_out,
        SvelteComponent
    };

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
    function debounce(func, duration) {
        let identifier;

        return (...args) => {
            if (identifier) {
                clearTimeout(identifier);
                identifier = null;
            }

            identifier = setTimeout(() => {
                func.apply(null, args);
            }, duration);
        };
    }

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
        return eval(javascript)(window, SVELTE_LIB);
    }
</script>

<script>
    import CodeFlask from "./CodeFlask.svelte";

    let _class;
    export let style = "";

    export let mode = 0;
    export let value = "";

    export {_class as class};

    let component;
    let generated = "";
    let preview_element;

    function on_mode_select(event, _mode) {
        event.preventDefault();

        mode = parseInt(event.target.getAttribute("data-mode"));
    }

    const update_render = debounce((code, target) => {
        if (component) {
            component.$destroy();
            component = null;
        }

        const Component = compile_component(code);
        //console.log({Component});
        component = new Component({target});
    }, 250);

    $: {
        if (preview_element) {
            update_render(value, preview_element);
        }
    }
</script>

<div class="modal {_class}" {style}>
    <div class="modal bc-light" bind:this={preview_element} />

    <CodeFlask class="rel w-100" style="height:25rem;" bind:value />
</div>
