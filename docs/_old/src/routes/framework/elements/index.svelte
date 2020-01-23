<script>
    const {Article, Header} = window.luda;

    import Layout from "../_layout.svelte";
</script>

<Layout>
    <Article>
        <Header fw-semibold>Elements</Header>
        <Header size="3" fw-light>
            Elements are basic visible units to create user interfaces. Each element has a specific
            function, and doesn't rely on other HTML layout composition.
        </Header>
    </Article>

    <Article>
        <Header>Framework Elements</Header>
        <ul class="px-medium h4">
            <li>
                <a href="#framework/elements/article">Article</a>
            </li>
            <li>
                <a href="#framework/elements/badge">Badge</a>
            </li>
            <li>
                <a href="#framework/elements/button">Button</a>
            </li>
            <li>
                <a href="#framework/elements/container">Container</a>
            </li>
            <li>
                <a href="#framework/elements/form">Form</a>
            </li>
            <li>
                <a href="#framework/elements/icon">Icon</a>
            </li>
            <li>
                <a href="#framework/elements/media">Media</a>
            </li>
            <li>
                <a href="#framework/elements/overlay">Overlay</a>
            </li>
            <li>
                <a href="#framework/elements/progress">Progress</a>
            </li>
            <li>
                <a href="#framework/elements/scrollbar">Scrollbar</a>
            </li>
        </ul>
    </Article>
</Layout>
