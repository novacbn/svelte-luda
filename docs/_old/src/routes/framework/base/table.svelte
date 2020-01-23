<script>
    const {Article, Header} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import DocsBlock from "../../../components/docs/DocsBlock.svelte";
    import DocsImport from "../../../components/docs/DocsImport.svelte";
    import DocsTypeHints from "../../../components/docs/DocsTypeHints.svelte";

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

        <DocsImport imports={[['base', 'Table']]} />
    </Article>

    <Article>
        <DocsBlock title="Table Styles">
            Luda offers some different built-in ways of styling your
            <code>Table</code>
            Components.
        </DocsBlock>

        <DocsBlock code={examples.styles.plain} title="Plain Table" small>
            By default in
            {@html `<b>svelte-luda</b>,`}
            <code>Table</code>
            Components have no default row special styling.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.bordered}
            title="Bordered Table"
            types={['type Table.border = boolean;']}
            small>
            Change the
            <code>Table.border</code>
            property to create bordered tables.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.striped}
            title="Striped Table"
            types={['type Table.stripes = boolean;']}
            small>
            Change the
            <code>Table.stripes</code>
            property to create striped tables.
        </DocsBlock>

        <DocsBlock
            code={examples.styles.all}
            title="Bordered and Striped Table"
            types={['type Table.border = boolean;', 'type Table.stripes = boolean;']}
            small>
            Use both the
            <code>Table.border</code>
            and
            <code>Table.stripes</code>
            properties to create bordered AND striped tables.
        </DocsBlock>
    </Article>

    <Article>
        <DocsBlock title="Table Modifiers">
            There is also a few modifiers provided by Luda that you can utilize with your
            <code>Table</code>
            Components.
        </DocsBlock>

        <DocsBlock
            code={examples.modifiers.hover}
            title="Hover Table"
            types={['type Table.hover = boolean;']}
            small>
            The
            <code>Table.hover</code>
            property enhances hovering styles of
            <code>Table</code>
            Component rows. Make sure to note that, these effects work on mobile Browsers via
            touching instead. Hover the rows below to preview the effects.
        </DocsBlock>

        <DocsBlock
            code={examples.modifiers.nowrap}
            title="No Wrap Table"
            types={['type Table.nowrap = boolean;']}
            small>
            A
            <code>Table</code>
            Component with the
            <code>Table.nowrap</code>
            property prevents the contets in the cells from breaking in newlines. Let's see with the
            below example.
        </DocsBlock>
    </Article>
</Layout>
