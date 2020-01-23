<script>
    import {getContext} from "svelte";

    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../../actions/element";

    import Button from "../../elements/Button.svelte";
    import {TAB_CONTEXT_SYMBOL} from "./Tab.svelte";

    let _class = "";

    export let horizontal = false;

    export {_class as class};

    const context = getContext(TAB_CONTEXT_SYMBOL);

    let selected, tabs;
    if (context) ({selected, tabs} = context);

    /**
     * Handles clicks on the default provided tab buttons, automatically selecting the new tab
     */
    function on_click(event, {id}) {
        event.preventDefault();

        $selected = item.id;
    }
</script>

<nav
    class="tab-indicators {_class}"
    class:btns-fluid={horizontal}
    class:btns-y={horizontal}
    class:btns-x={!horizontal}
    use:html5_passthrough={$$props}
    use:luda_classes={$$props}>
    {#if tabs}
        {#each $tabs as item}
            <slot {item}>
                <Button on:click={(event) => on_click(event, item)} {...item}>{item.title}</Button>
            </slot>
        {/each}
    {:else}
        <slot />
    {/if}
</nav>
