<script>
    import {getContext} from "svelte";

    import {parse_utility} from "../../../util/luda";

    import Button from "../../elements/Button.svelte";
    import {TAB_CONTEXT_SYMBOL} from "./Tab.svelte";

    let _class = "";
    export let style = "";

    export let horizontal = false;

    export {_class as class};

    const context = getContext(TAB_CONTEXT_SYMBOL);

    $: state = context ? context.state : null;
    $: horizontal_class = horizontal ? "btns-y btns-fluid" : "btns-x";

    /**
     * Handles clicks on the default provided tab buttons, automatically selecting the new tab
     */
    function on_click(event) {
        event.preventDefault();

        context.select_tab(event.target.innerText);
    }
</script>

<nav class="tab-indicators {horizontal_class} {parse_utility($$props)} {_class}" {style}>
    {#if state}
        {#each $state as item}
            <slot {item}>
                <Button on:click={on_click} {...item}>{item.title}</Button>
            </slot>
        {/each}
    {:else}
        <slot />
    {/if}
</nav>
