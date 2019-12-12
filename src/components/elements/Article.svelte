<script>
    import {get_attributes} from "../../util/browser";
    import {get_utilities} from "../../util/luda";

    let _class = "";

    export {_class as class};
</script>

<article class="article {get_utilities($$props)} {_class}" {...get_attributes($$props)}>
    <slot />
</article>
