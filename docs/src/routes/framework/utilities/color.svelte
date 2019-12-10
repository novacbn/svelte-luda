<script>
    const {Article} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import Layout from "../_layout.svelte";

    import examples from "./_color.toml";
</script>

<Layout>
    <Article>
        <h1 class="fw-semibold">Color</h1>
        <h3 class="fw-light">
            Use background utilities to change color of texts.
        </h3>
    </Article>

    <Article>
        <h1>Text Color</h1>
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
