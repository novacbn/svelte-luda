<script>
    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    let _class = "";

    export {_class as class};
</script>

<div class="tab-panes {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
    <slot />
</div>
