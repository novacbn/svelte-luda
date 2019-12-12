<script context="module">
    /**
     * Represents the left arrow character
     */
    const left_arrow = "<";

    /**
     * Returns the formatted CommonJS import statements
     */
    function format_commonjs(path, component, export_members = []) {
        const _require = `require("svelte-luda/lib/${path}/${component}.svelte");`;
        const statements = [];

        statements.push(`const ${component} = ${_require}`);
        if (export_members.length > 0) {
            const _exports = export_members.join(", ");

            statements.push(`const {${_exports}} = ${_require}`);
        }

        return statements.join("\n");
    }

    /**
     * Returns the formatted ES2015 import statements
     */
    function format_es2015(path, component, export_members = []) {
        let export_string = "";
        if (export_members.length > 0) {
            export_members = export_members.join(", ");
            export_string = `, {${export_members}}`;
        }

        return `import ${component}${export_string} from "svelte-luda/lib/${path}/${component}.svelte";`;
    }

    /**
     *
     */
    function format_window(path, component, export_members = []) {
        let export_string = "";
        if (export_members.length > 0) {
            export_members = export_members.join(", ");
            export_string = `, ${export_members}`;
        }

        // HACK: have to template in the left arrow "<" character due to the
        // Svelte compiler not disregarding HTML tags within the `<script>` blocks
        return `${left_arrow}script
    type="application/javascript"
    src="/path/to/svelte-luda.umd.js"
>${left_arrow}/script>

${left_arrow}script>
    const {${component}${export_string}} = window.luda;
${left_arrow}/script>`;
    }

    /**
     * Returns a set of formatted import statements, depending on import type
     */
    function format(imports, type) {
        const statements = [];

        switch (type) {
            case "commonjs":
                for (const import_data of imports) statements.push(format_commonjs(...import_data));
                break;
            case "es2015":
                for (const import_data of imports) statements.push(format_es2015(...import_data));
                break;
            case "window":
                for (const import_data of imports) statements.push(format_window(...import_data));
                break;
        }

        return statements.join("\n\n");
    }
</script>

<script>
    const {TabPane, TabPanes, Tab} = luda;

    export let imports = [];

    $: code_commonjs = format(imports, "commonjs");
    $: code_es2015 = format(imports, "es2015");
    $: code_window = format(imports, "window");
</script>

<Tab>
    <TabPanes>
        <TabPane title="ES2015" active>
            <pre class="code py-small">
                <code>{code_es2015}</code>
            </pre>
        </TabPane>

        <TabPane title="CommonJS">
            <pre class="code py-small">
                <code>{code_commonjs}</code>
            </pre>
        </TabPane>

        <TabPane title="Browser">
            <pre class="code py-small">
                <code>{code_window}</code>
            </pre>
        </TabPane>
    </TabPanes>
</Tab>
