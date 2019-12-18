<script context="module">
    /**
     * Returns the formatted utility classes based on header properties
     */
    function header_class(header) {
        return (header.indent ? `ml-${header.indent} ` : "") +
            (header.indent ? "" : "mt-tiny");
    }
</script>

<script>
    const {
        Button,
        Navigation,
        NavigationButton,
        NavigationItems,
        NavigationMenu
    } = window.luda;

    import {getContext} from "svelte";

    import {FRAMEWORK_CONTEXT_SYMBOL} from "../../routes/framework/_layout.svelte";

    const context = getContext(FRAMEWORK_CONTEXT_SYMBOL);
    const headers = context.headers ? context.headers : null;

    let close = false;

    $: close_class = close ? "docs-active" : "";
</script>

<style>
    :global(.docs-headers) {
        position: fixed;
        right: 0;

        width: fit-content;
        height: 100vh;
        padding-left: var(--spacing-medium);

        flex-direction: column;

        background-color: var(--bc-muted);
        transform: translateX(85%);

        overflow: auto;
        z-index: 1;
    }

    :global(.docs-headers.docs-active) {
        transform: none;
    }

    :global(.docs-headers > .nav-menu) {
        display: flex;
        position: relative;
        z-index: 2;
        background: none;

        flex: 0 0 auto;
        height: auto;
        overflow: visible;
    }

    :global(.docs-headers > .nav-menu > .nav-close),
    :global(.docs-headers > .nav-menu > .nav-open) {
        display: inline-flex;
        position: absolute;

        flex: 0 0 auto;
        margin: 0 0 0 auto;

        top: calc(var(--spacing-large) + 0.5rem);
        left: calc(var(--spacing-medium) * -1);
    }

    :global(.docs-headers:not(.docs-active) > .nav-menu > .nav-items) {
        visibility: collapse;
    }

    @media (min-width: 768px) {
        :global(.docs-headers) {
            transform: translateX(88%);
        }
    }

    @media (min-width: 1200px) {
        :global(.docs-headers) {
            position: sticky;
            padding-left: 0;
            margin-left: var(--spacing-large);

            background: none;
            transform: none;
        }

        :global(.docs-headers > .nav-menu > .nav-close),
        :global(.docs-headers > .nav-menu > .nav-open) {
            display: none;
        }

        :global(.docs-headers:not(.docs-active) > .nav-menu > .nav-items) {
            visibility: visible;
        }
    }
</style>

<Navigation class="docs-headers col-5 col-auto-l {close_class}" aside>
    <NavigationMenu style="padding-top:7.5rem;">
        <NavigationButton color="dark" bind:close />

        <NavigationItems>
            {#each $headers as header}
                <Button
                    active={header.active && header.visible}
                    class={header_class(header)}
                    color="dark"
                    hollow={header.active}
                    href={header.href}
                    o-emphasis={!header.active && header.visible}
                    o-muted={!header.active && !header.visible}
                    text={!header.active}>
                    <small>
                        {header.text}
                    </small>
                </Button>
            {/each}
        </NavigationItems>
    </NavigationMenu>
</Navigation>
