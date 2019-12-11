<script>
    const {Article, Header} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import Layout from "../_layout.svelte";

    import examples from "./_color.toml";
</script>

<Layout>
    <Article>
        <Header fw-semibold>Color</Header>
        <Header size="3" fw-light>
            Use color utilities to change display color of texts.
        </Header>
    </Article>

    <Article>
        <Header>Text Color</Header>
        <p>
            Text color utility properties are usable on any Component supplied by
            <b>svelte-luda</b>
            and set
            {@html `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color"><code>color</code></a>.`}
            When you pick a non-default text color, consider the meaning in your context, not
            just the visual appearance. Since in different Luda themes, the classes might be the
            same, but actual colors different.
        </p>
        <Repl value={examples.color.grid} />
    </Article>
</Layout>
