<script>
    const {Header} = window.luda;

    import DocsTypeHints from "./DocsTypeHints.svelte";
    import Repl from "../Repl.svelte";

    export let code = "";
    export let example = "";
    export let small = false;
    export let title = "";
    export let types = [];
</script>

{#if small}
    <Header size="2">{title}</Header>

    {#if types.length > 0}
        <DocsTypeHints types={[
            "type TabPane.active = boolean;",
            "type TabPane.title = string;"
        ]} />
    {/if}

    <p>
        <slot />
    </p>

    {#if code}
        <Repl value={code} />
    {:else if example}
        <Repl value={example} />
    {/if}

{:else}
    <Header>{title}</Header>

    <p>
        <slot />
    </p>
{/if}