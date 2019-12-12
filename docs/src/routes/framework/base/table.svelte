<script>
    const {Article, Header} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import DocsImport from "../../../components/docs/DocsImport.svelte";

    import Layout from "../_layout.svelte";

    import examples from "./_table.toml";
</script>

<Layout>
    <Article>
        <Header fw-semibold>Table</Header>
        <Header size="3" fw-light>
            A table represents tabular data — that is, information presented in a two-dimensional
            table comprised of rows and columns of cells containing data.
        </Header>

        <Header size="2">Importing from Package</Header>

        <DocsImport
            imports={[
                ["base", "Table"]
            ]}
        />
    </Article>

    <Article>
        <Header>Table Styles</Header>
        <p>
            Luda offers some different built-in ways of styling your
            <code>Table</code>
            Components.
        </p>

        <Header size="2">Plain Table</Header>
        <p>
            By default in
            {@html `<b>svelte-luda</b>,`}
            <code>Table</code>
            Components have no default row special styling.
        </p>
        <Repl value={examples.styles.plain} />

        <Header size="2">Bordered Table</Header>
        <small class="d-block">
            <code>type Table.border = boolean;</code>
        </small>
        <p>
            Change the
            <code>Table.border</code>
            property to create bordered tables.
        </p>
        <Repl value={examples.styles.bordered} />

        <Header size="2">Striped Table</Header>
        <small class="d-block">
            <code>type Table.stripes = boolean;</code>
        </small>
        <p>
            Change the
            <code>Table.stripes</code>
            property to create striped tables.
        </p>
        <Repl value={examples.styles.striped} />

        <Header size="2">Bordered and Striped Table</Header>
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
        <Header>Table Modifiers</Header>
        <p>
            There is also a few modifiers provided by Luda that you can utilize with your
            <code>Table</code>
            Components.
        </p>

        <Header size="2">Hover Effect</Header>
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

        <Header size="2">No Wrap</Header>
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
