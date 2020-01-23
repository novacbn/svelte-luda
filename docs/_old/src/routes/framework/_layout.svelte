<script context="module">
    /**
     * Represents the `Symbol` used to access the `framework/_layout.svelte` runtime context
     */
    export const FRAMEWORK_CONTEXT_SYMBOL = Symbol("luda-docs-layout");
</script>

<script>
    import {setContext} from "svelte";

    const {
        Button,
        Grid
    } = window.luda;

    import DocsHeaders from "../../components/docs/DocsHeaders.svelte";
    import DocsNavigation from "../../components/docs/DocsNavigation.svelte";

    import {header} from "../../stores/header";

    const headers = header();

    setContext(FRAMEWORK_CONTEXT_SYMBOL, {
        headers
    });

    window.requestIdleCallback(() => headers.scroll_header());
</script>

<style>
    main {
        padding-top: var(--spacing-medium);
        padding-bottom: var(--spacing-medium);

        padding-left: var(--spacing-medium);
        padding-right: 5.5rem;

        z-index: 1;
    }

    @media (min-width: 768px) {
        main {
            padding-top: var(--spacing-small);
            padding-bottom: var(--spacing-large);

            padding-left: var(--spacing-large);
            padding-right: var(--spacing-large);
        }
    }
</style>

<Grid edge>
    <DocsNavigation />

    <main class="col-auto">
        <slot />
    </main>

    <DocsHeaders />
</Grid>
