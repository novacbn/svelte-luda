<script>
    import {getContext, onDestroy} from "svelte";

    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../../actions/element";

    import {TAB_CONTEXT_SYMBOL} from "./Tab.svelte";

    let _class = "";

    export let active = false;
    export let id = Math.random();

    export {_class as class};

    const context = getContext(TAB_CONTEXT_SYMBOL);

    let selected, tabs;
    if (context) ({selected, tabs} = context);

    $: if (selected && active && $selected !== id) selected.set(id);
    $: if (selected && $selected !== id) active = false;

    let item;
    $: {
        if (tabs) {
            // NOTE: `collection.set_item` should internally not run, if
            // it detects there are no changes to commit
            if (item) item = tabs.set_item({id}, {...$$props});
            else item = tabs.push({id, ...$$props});
        }
    }

    onDestroy(() => {
        if (item) tabs.reject({id});
    });
</script>

<div
    class="tab-pane {_class}"
    class:tab-pane-active={active}
    use:html5_passthrough={$$props}
    use:luda_classes={$$props}>
    <slot />
</div>
