<script>
    const {Article, Header} = window.luda;

    import Layout from "./_layout.svelte";

    const path = location.hash ? location.hash.slice(1) : "";
</script>

<Layout>
    <Article>
        <Header fw-semibold>
            Not Available ::
            <code>{path}</code>
        </Header>

        <Header size="3" fw-light>
            It seems you tried to access a planned link, but is currently not available or
            implemented, please check back at a later date!
        </Header>
    </Article>
</Layout>
