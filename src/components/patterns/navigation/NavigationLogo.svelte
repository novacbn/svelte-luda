<script>
    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export let href = "";
    export let target = "";

    export {_class as class};
</script>

<a class="nav-logo {parse_utility($$props)} {_class}" {href} {target} {style} on:click>
    <slot />
</a>
