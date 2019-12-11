<script>
    const {Article, Header} = window.luda;

    const path = location.hash ? location.hash.slice(1) : "";

    /**
     * Handles the "Go Back" link, preventing default behaviour and going back via `History` API
     */
    function on_click(event) {
        event.preventDefault();

        history.back();
    }
</script>

<Article>
    <Header fw-semibold>
        Not Found ::
        <code>{path}</code>
    </Header>

    <Header size="3" fw-light>
        It seems you tried to access an invalid link! If you would like, you can head back to the
        <a href="#">Landing Page</a>
        or
        <a href="#" on:click={on_click}>Go Back</a>
        to your previous page.
    </Header>
</Article>
