<script>
    const {Header} = window.luda;

    import DocsHeader from "./DocsHeader.svelte";
    import DocsImport from "./DocsImport.svelte";

    export let imports = [];
    export let title = "";
</script>

<DocsHeader text={title} fw-semibold />
<Header size="3" fw-light>
    <slot />
</Header>

{#if imports.length}
    <DocsHeader indent="medium" size="2" text="Importing from Package" />
    
    <DocsImport {imports} />
{/if}