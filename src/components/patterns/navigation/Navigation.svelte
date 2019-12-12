<script context="module">
    /**
     * Represents the `Symbol` used to access the `Navigation` Component's runtime store
     */
    export const NAVIGATION_CONTEXT_SYMBOL = Symbol("luda-navigation");
</script>

<script>
    import {setContext} from "svelte";
    import {writable} from "svelte/store";

    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    let _class = "";

    export let aside = false;
    export let opened = false;

    export {_class as class};

    const state = writable(opened);

    $: state.set(opened);
    $: opened = $state;

    setContext(NAVIGATION_CONTEXT_SYMBOL, {state});
</script>

{#if aside}
    <aside class="nav-aside {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
        <slot />
    </aside>
{:else}
    <header class="nav-header {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
        <slot />
    </header>
{/if}
