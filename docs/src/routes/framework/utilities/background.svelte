<script>
    const {Article, Table} = window.luda;

    import Repl from "../../../components/Repl.svelte";
    import Layout from "../_layout.svelte";

    import examples from "./_background.toml";
</script>

<Layout>
    <Article>
        <h1 class="fw-semibold">Background</h1>
        <h3 class="fw-light">
            Use background utilities to change the background color, background size and background
            poisition of a Component.
        </h3>
    </Article>

    <Article>
        <h1>Background Color</h1>
        <p>
            Background color utility properties are usable on any Component supplied by
            <b>svelte-luda</b>
            and set
            {@html `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"><code>background-color</code></a>.`}
            When you pick a non-default background color, consider the meaning in your context, not
            just the visual appearance. Since in different Luda themes, the classes might be the
            same, but actual colors different.
        </p>
        <Repl value={examples.color.grid} />
        <p>
            *
            <code>bc-none</code>
            sets the background to
            {@html `<code>background-color: transparent;</code>.`}
        </p>
    </Article>

    <Article>
        <h1>Background Image</h1>
        <p>
            Background image utility properties are for modifying Components that had some form of
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-image">
                <code>background-image</code>
            </a>
            applied to it.
        </p>
        <Repl value={examples.image.grid} />
        <p>
            *
            <code>bi-none</code>
            sets the background to
            {@html `<code>background-image: none;</code>.`}
        </p>
    </Article>

    <Article>
        <h1>Background Size</h1>
        <p>
            Background image utility properties are for modifying Components that had some form of
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size">
                <code>background-size</code>
            </a>
            applied to it.
        </p>
        <Repl value={examples.size.grid} />
    </Article>

    <Article>
        <h1>Background Position</h1>
        <p>
            Background position utilities are classes for setting the value of the
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-position">
                <code>background-position</code>
            </a>
            propery. They are named using the format
            {@html `<code>bp-{horizontal position}-{vertical-position}</code>.`}
        </p>
        <p>
            We use the first letter of each position word for short, all position abbreviations are
            listed in the below table.
        </p>
        <Table border striped>
            <thead>
                <tr>
                    <th>Abbreviation</th>
                    <th>Position</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>c</td>
                    <td>center</td>
                </tr>

                <tr>
                    <td>t</td>
                    <td>top</td>
                </tr>

                <tr>
                    <td>r</td>
                    <td>right</td>
                </tr>

                <tr>
                    <td>b</td>
                    <td>bottom</td>
                </tr>

                <tr>
                    <td>l</td>
                    <td>left</td>
                </tr>
            </tbody>
        </Table>
        <Repl value={examples.position.grid} />
    </Article>
</Layout>
