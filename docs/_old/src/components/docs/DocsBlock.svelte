<script>
    import DocsHeader from "./DocsHeader.svelte";

    import Repl from "../Repl.svelte";

    export let code = "";
    export let example = "";
    export let links = [];
    export let small = false;
    export let title = "";
    export let types = [];

    $: header_size = small ? "2" : "1";
    $: indent = small ? "medium" : "";
</script>

<DocsHeader size={header_size} text={title} {indent} />

{#if links.length > 0}
    <small class="d-block">
        {#each links as link}
            <a href={link[1]}>
                <code>{link[0]}</code>
            </a>
        {/each}
    </small>
{/if}

{#if types.length > 0}
    <small class="d-block">
        {#each types as hint}
            <pre><code>{hint}</code></pre>
        {/each}
    </small>
{/if}

<p>
    <slot />
</p>

{#if code}
    <Repl value={code} />
{:else if example}
    <Repl value={example} />
{/if}
