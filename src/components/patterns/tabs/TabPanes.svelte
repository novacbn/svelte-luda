<script>
    import {parse_utility} from "../../../util/luda";

    let _class = "";
    export let style = "";

    export {_class as class};
</script>

<div class="tab-panes {parse_utility($$props)} {_class}" {style}>
    <slot />
</div>
