<script>
    const {Header} = window.luda;

    import {get_slug} from "../../util/string";

    import DocsTypeHints from "./DocsTypeHints.svelte";
    import Repl from "../Repl.svelte";

    export let code = "";
    export let example = "";
    export let links = [];
    export let small = false;
    export let title = "";
    export let types = [];

    $: header_size = small ? "2" : "1";
    $: id = get_slug(title);
</script>

<Header size={header_size} {id}>{title}</Header>

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
    <DocsTypeHints {types} />
{/if}

<p>
    <slot />
</p>

{#if code}
    <Repl value={code} />
{:else if example}
    <Repl value={example} />
{/if}