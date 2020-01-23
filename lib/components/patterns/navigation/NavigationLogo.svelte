<script>
    import {get_attributes} from "../../../util/browser";
    import {get_utilities} from "../../../util/luda";

    let _class = "";

    export let href = "";
    export let target = "";

    export {_class as class};
</script>

<a
    class="nav-logo {get_utilities($$props)}
    {_class}"
    {href}
    {target}
    {...get_attributes($$props)}
    on:click>
    <slot />
</a>
