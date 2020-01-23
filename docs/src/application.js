import * as SvelteLuda from "../../lib/index";

window.SvelteLuda = SvelteLuda;

import Application from "./components/application/Application.svelte";

window.addEventListener("DOMContentLoaded", (event) => {
    window._application = new Application({
        target: document.body
    });
});
