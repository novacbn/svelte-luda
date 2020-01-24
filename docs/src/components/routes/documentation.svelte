<script>
    const {Article} = window.SvelteLuda.components.base;

    import {hook_code_blocks} from "../../util/code";
    import {get_documentation_route} from "../../util/documentation";
    import {get_captialized} from "../../util/string";

    export let name = "";
    export let subname = "";

    $: path = subname ? name + "/" + subname : name;

    let Component, title;
    $: {
        const route = get_documentation_route(path || "");

        if (route) ({Component, title} = route);
    }

    let component;
    $: {
        if (component) hook_code_blocks("#documentation-article");
    }
</script>

<style>
    :global(#documentation-article > h1:first-child) {
        font-weight: 600;
    }

    :global(#documentation-article > h2:nth-child(2)) {
        font-weight: 300;
        opacity: 0.85;
    }

    :global(#documentation-article > h1),
    :global(#documentation-article > h2),
    :global(#documentation-article > h3),
    :global(#documentation-article > h4),
    :global(#documentation-article > h5),
    :global(#documentation-article > h6) {
        position: relative;
    }

    :global(#documentation-article > h1 > a),
    :global(#documentation-article > h2 > a),
    :global(#documentation-article > h3 > a),
    :global(#documentation-article > h4 > a),
    :global(#documentation-article > h5 > a),
    :global(#documentation-article > h6 > a) {
        position: absolute;
        left: -2em;

        padding: 0 1em 1em;

        text-decoration: none;

        visibility: hidden;
    }

    :global(#documentation-article > h1 > a:hover),
    :global(#documentation-article > h2 > a:hover),
    :global(#documentation-article > h3 > a:hover),
    :global(#documentation-article > h4 > a:hover),
    :global(#documentation-article > h5 > a:hover),
    :global(#documentation-article > h6 > a:hover),
    :global(#documentation-article > h1:hover > a),
    :global(#documentation-article > h2:hover > a),
    :global(#documentation-article > h3:hover > a),
    :global(#documentation-article > h4:hover > a),
    :global(#documentation-article > h5:hover > a),
    :global(#documentation-article > h6:hover > a) {
        visibility: visible;
    }

    :global(#documentation-article fieldset) {
        border: 2px groove #f7f7f7;

        padding-block-start: 0.35em;
        padding-inline-start: 0.75em;
        padding-inline-end: 0.75em;
        padding-block-end: 0.625em;
    }
</style>

<Article id="documentation-article">
    <ol class="breadcrumb">
        <li>
            <a href="#">Home</a>
        </li>

        <li>
            <a href="#documentation">Documentation</a>
        </li>

        {#if name}
            <li>
                <a href="#documentation/{name}">{subname ? get_captialized(name) : title}</a>
            </li>
        {/if}

        {#if subname}
            <li>
                <a href="#documentation/{name}/{subname}">{title}</a>
            </li>
        {/if}
    </ol>

    {#if Component}
        <svelte:component this={Component} bind:this={component} />
    {:else}
        <h2>
            404: Unknown documentation route:
            <code>{location.hash.slice(1)}</code>
        </h2>
    {/if}
</Article>
