<script context="module">
    /**
     * Returns the formatted utility classes based on header properties
     */
    function header_class(header) {
        return (header.indent ? `ml-${header.indent} ` : "") +
            (header.indent ? "" : "mt-tiny");
    }
</script>

<script>
    const {
        Button,
        Navigation,
        NavigationItems,
        NavigationMenu
    } = window.luda;

    import {getContext} from "svelte";

    import {FRAMEWORK_CONTEXT_SYMBOL} from "../../routes/framework/_layout.svelte";

    const context = getContext(FRAMEWORK_CONTEXT_SYMBOL);
    const headers = context.headers ? context.headers : null;
</script>

<Navigation class="col-auto d-none-m d-flex-l ml-large-l" aside bc-none>
    <NavigationMenu style="padding-top:7.5rem;">
        <NavigationItems>
            {#each $headers as header}
                <Button
                    active={header.active && header.visible}
                    class={header_class(header)}
                    color="dark"
                    hollow={header.active}
                    href={header.href}
                    o-emphasis={!header.active && header.visible}
                    o-muted={!header.active && !header.visible}
                    text={!header.active}>
                    <small>
                        {header.text}
                    </small>
                </Button>
            {/each}
        </NavigationItems>
    </NavigationMenu>
</Navigation>
