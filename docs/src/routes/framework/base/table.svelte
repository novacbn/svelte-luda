<script>
    const {Article} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import Layout from "../_layout.svelte";

    import examples from "./_table.toml";
</script>

<Layout>
    <Article>
        <h1 class="fw-semibold">Table</h1>
        <h3 class="fw-light">
            A table represents tabular data — that is, information presented in a two-dimensional
            table comprised of rows and columns of cells containing data.
        </h3>

        <h2>Import via CommonJS</h2>
        <pre>
            <code>const Table = require("svelte-luda/lib/base/Table.svelte");</code>
        </pre>

        <h2>Import via ES2015</h2>
        <pre>
            <code>import Button from "svelte-luda/lib/base/Table.svelte";</code>
        </pre>

        <h2>
            Import from
            <code>{'<script />'}</code>
            Package
        </h2>
        <pre>
            <code>const {'{Table}'} = window.luda;</code>
        </pre>
    </Article>

    <Article>
        <h1>Table Styles</h1>
        <p>
            Luda offers some different built-in ways of styling your
            <code>Table</code>
            Components.
        </p>

        <h2>Plain Table</h2>
        <p>
            By default in
            {@html `<b>svelte-luda</b>,`}
            <code>Table</code>
            Components have no default row special styling.
        </p>
        <Repl value={examples.styles.plain} />

        <h2>Bordered Table</h2>
        <small class="d-block">
            <code>type Table.border = boolean;</code>
        </small>
        <p>
            Change the
            <code>Table.border</code>
            property to create bordered tables.
        </p>
        <Repl value={examples.styles.bordered} />

        <h2>Striped Table</h2>
        <small class="d-block">
            <code>type Table.stripes = boolean;</code>
        </small>
        <p>
            Change the
            <code>Table.stripes</code>
            property to create striped tables.
        </p>
        <Repl value={examples.styles.striped} />

        <h2>Bordered and Striped Table</h2>
        <small class="d-block">
            <pre>
                <code>type Table.border = boolean;</code>
            </pre>

            <pre>
                <code>type Table.stripes = boolean;</code>
            </pre>
        </small>
        <p>
            Use both the
            <code>Table.border</code>
            and
            <code>Table.stripes</code>
            properties to create bordered AND striped tables.
        </p>
        <Repl value={examples.styles.all} />
    </Article>

    <Article>
        <h1>Table Modifiers</h1>
        <p>
            There is also a few modifiers provided by Luda that you can utilize with your
            <code>Table</code>
            Components.
        </p>

        <h2>Hover Effect</h2>
        <small class="d-block">
            <code>type Table.hover = boolean;</code>
        </small>
        <p>
            The
            <code>Table.hover</code>
            property enhances hovering styles of
            <code>Table</code>
            Component rows. Make sure to note that, these effects work on mobile Browsers via
            touching instead. Hover the rows below to preview the effects.
        </p>
        <Repl value={examples.modifiers.hover} />

        <h2>No Wrap</h2>
        <small class="d-block">
            <code>type Table.nowrap = boolean;</code>
        </small>
        <p>
            A
            <code>Table</code>
            Component with the
            <code>Table.nowrap</code>
            property prevents the contets in the cells from breaking in newlines. Let's see with the
            below example.
        </p>
        <Repl value={examples.modifiers.nowrap} />
    </Article>
</Layout>
