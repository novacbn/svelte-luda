<script>
    const {Article, Header} = window.luda;

    import DocsBlock from "../../../components/docs/DocsBlock.svelte";
    import DocsImport from "../../../components/docs/DocsImport.svelte";

    import Layout from "../_layout.svelte";

    import examples from "./_tab.toml";
</script>

<Layout>
    <Article>
        <Header fw-semibold>Tab</Header>
        <Header size="3" fw-light>Create horizontal and vertical tab navigations easily.</Header>

        <Header size="2">Importing from Package</Header>

        <DocsImport
            imports={[['patterns/tab', 'Tab', ['TAB_CONTEXT_SYMBOL']], ['patterns/tab', 'TabIndicators'], ['patterns/tab', 'TabPane'], ['patterns/tab', 'TabPanes']]} />
    </Article>

    <Article>
        <DocsBlock title="Tab Layouts">
            The tab pattern can includes four different Components,
            {@html `<code>Tab</code>,`}
            {@html `<code>TabIndicators</code>,`}
            {@html `<code>TabPane</code>,`}
            and
            {@html `<code>TabPanes</code>.`}
            <code>Tab</code>
            is used as the base parent and wrapper. While
            <code>TabIndicators</code>
            is used to contain a set of
            <code>Button</code>
            Component children to control which
            <code>TabPane</code>
            to show. Finally
            <code>TabPane</code>
            acts as the hideable parent containers for your separated content, with
            <code>TabPanes</code>
            containing all of them.
        </DocsBlock>

        <DocsBlock
            code={examples.layouts.vertical}
            title="Vertical Tabs"
            types={['type TabPane.active = boolean;', 'type TabPane.title = string;']}
            small>
            To create vertical create a
            <code>Tab</code>
            parent Component with the other basic compositional Components. Use
            <code>TabPane.active</code>
            to set your default tab, and then
            <code>TabPane.title</code>
            to set your indicator title.
        </DocsBlock>
    </Article>
</Layout>
