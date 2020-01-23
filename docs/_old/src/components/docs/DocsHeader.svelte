<script>
    import {getContext, onDestroy} from "svelte";

    const {Header} = window.luda;

    import {FRAMEWORK_CONTEXT_SYMBOL} from "../../routes/framework/_layout.svelte";

    import {get_header_url} from "../../stores/header";

    import {get_slug} from "../../util/string";

    let _class = "";

    export let indent = "";
    export let size = "1";
    export let text = "";

    export {_class as class};

    const context = getContext(FRAMEWORK_CONTEXT_SYMBOL);
    const headers = context.headers ? context.headers : null;

    $: href = get_header_url(id);
    $: id = get_slug(text);

    let item;
    $: {
        if (context && headers) {
            // HACK: mark `headers` as a reactive Store so we can auto update
            $headers;

            item = headers.find_link({text});
        }
    }

    let destroy;
    $: {
        if (headers) {
            if (destroy) {
                destroy();
                destroy = null;
            }

            destroy = headers.push_link({id, indent, text});
        }
    }

    if (headers) {
        onDestroy(() => {
            if (destroy) destroy();
        });
    }

    $: active_class = item && item.active ? "docs-active" : "";
</script>

<style>
    :global(.docs-header) {
        position: relative;

        margin-left: -2rem;
        text-decoration: none !important;
    }

    :global(.docs-header.docs-active) {
        color: var(--dark);
    }

    :global(.docs-header > span) {
        color: var(--primary);
        opacity: 0;
    }

    :global(.docs-header.docs-active > span),
    :global(.docs-header:hover > span) {
        opacity: 1;
    }
</style>

<Header {...$$props} class="docs-header {active_class} {_class}" {href} {id} {size} on:click>
    <span>#</span>
    {text}
</Header>