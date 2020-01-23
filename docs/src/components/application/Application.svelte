<script>
    const {requestIdleCallback} = window;

    import {query_param} from "svelte-commons/lib/stores/browser";

    import {make_router} from "../../util/router";

    const router = make_router();
    const selector = query_param("selector", "", {hash: true});

    let Component, parameters;
    $: {
        const results = $router;

        if (results) ({Component, parameters} = results);
        else {
            Component = null;
            parameters = null;
        }
    }

    $: {
        if (Component && $selector) {
            requestIdleCallback(() => {
                const element = document.querySelector("#" + $selector);
                console.log(element, $selector);
                if (element) element.scrollIntoView();
            });
        }
    }
</script>

{#if Component}
    <svelte:component this={Component} {...parameters} />
{:else}
    <h2>
        404: Unknown route
        <code>location.hash.slice(1)}</code>
    </h2>
{/if}
