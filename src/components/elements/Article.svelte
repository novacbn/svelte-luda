<script>
    import {parse_utility} from "../../util/luda";

    let _class = "";
    export let style = "";

    export {_class as class};
</script>

<article class="article {parse_utility($$props)} {_class}" {style} on:click>
    <slot />
</article>
