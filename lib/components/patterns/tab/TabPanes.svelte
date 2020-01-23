<script>
    import {html5_passthrough} from "svelte-commons/lib/actions/browser";

    import {luda_classes} from "../../../actions/element";

    let _class = "";

    export {_class as class};
</script>

<div class="tab-panes {_class}" use:html5_passthrough={$$props} use:luda_classes={$$props}>
    <slot />
</div>
