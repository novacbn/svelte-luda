import rlite from "./rlite";

import luda from "../../dist/svelte-luda.umd.js";

import Status404 from "./routes/_404.svelte";

// Re-export for tinkering and notify end-developer
window.luda = luda;
console.log("svelte-luda is now available under 'window.luda'", {luda});

window.Router = (application_routes) => {
    const routes = {};

    for (const [pattern, Component] of Object.entries(application_routes)) {
        routes[pattern] = (params) => new Component({props: params, target: document.body});
    }

    /**
     * Updates the current route view Svelte Component, when the Browser URL hash changes
     */
    function on_hash_change() {
        const hash = location.hash ? location.hash.slice(1) : "";

        if (window.route_component) {
            window.route_component.$destroy();
            window.route_component = null;
        }

        window.route_component = router(hash);
    }

    /**
     * Replaces the `<body>` HTML content on 404
     */
    function on_not_found() {
        return new Status404({target: document.body});
    }

    const router = rlite(on_not_found, routes);

    window.addEventListener("hashchange", on_hash_change);
    on_hash_change();

    return router;
};

window.addEventListener("load", () => {
    // Re-export for tinkering
    window.router = Router({
        "": require("./routes/index.svelte").default,
        "scratchpad": require("./routes/_404.svelte").default,
        "test": require("./routes/_test.svelte").default,

        /**
         * framework
         */

        "framework": require("./routes/framework/_501.svelte").default,
        "framework/installation": require("./routes/framework/_501.svelte").default,
        "framework/faq": require("./routes/framework/_501.svelte").default,

        /**
         * framework/base
         */

        "framework/base": require("./routes/framework/_501.svelte").default,
        "framework/base/baseline": require("./routes/framework/_501.svelte").default,
        "framework/base/code": require("./routes/framework/_501.svelte").default,
        "framework/base/header": require("./routes/framework/_501.svelte").default,
        "framework/base/link": require("./routes/framework/_501.svelte").default,
        "framework/base/list": require("./routes/framework/_501.svelte").default,
        "framework/base/pane": require("./routes/framework/_501.svelte").default,
        "framework/base/paragraph": require("./routes/framework/_501.svelte").default,
        "framework/base/quote": require("./routes/framework/_501.svelte").default,
        "framework/base/scrollbar": require("./routes/framework/_501.svelte").default,
        "framework/base/table": require("./routes/framework/base/table.svelte").default,
        "framework/base/text": require("./routes/framework/_501.svelte").default,
        
        /**
         * framework/elements
         */

        "framework/elements": require("./routes/framework/elements/index.svelte").default,
        "framework/elements/article": require("./routes/framework/_501.svelte").default,
        "framework/elements/badge": require("./routes/framework/_501.svelte").default,
        "framework/elements/button": require("./routes/framework/elements/button.svelte").default,
        "framework/elements/container": require("./routes/framework/_501.svelte").default,
        "framework/elements/form": require("./routes/framework/_501.svelte").default,
        "framework/elements/icon": require("./routes/framework/_501.svelte").default,
        "framework/elements/media": require("./routes/framework/_501.svelte").default,
        "framework/elements/overlay": require("./routes/framework/_501.svelte").default,
        "framework/elements/progress": require("./routes/framework/_501.svelte").default,


        /**
         * framework/patterns
         */

        "framework/patterns": require("./routes/framework/_501.svelte").default,
        "framework/patterns/alert": require("./routes/framework/_501.svelte").default,
        "framework/patterns/avatar": require("./routes/framework/_501.svelte").default,
        "framework/patterns/breadcrumb": require("./routes/framework/_501.svelte").default,
        "framework/patterns/button-group": require("./routes/framework/_501.svelte").default,
        "framework/patterns/button-icon": require("./routes/framework/_501.svelte").default,
        "framework/patterns/carousel": require("./routes/framework/_501.svelte").default,
        "framework/patterns/dropdown": require("./routes/framework/_501.svelte").default,
        "framework/patterns/form-dropdown": require("./routes/framework/_501.svelte").default,
        "framework/patterns/form-group": require("./routes/framework/_501.svelte").default,
        "framework/patterns/form-icon": require("./routes/framework/_501.svelte").default,
        "framework/patterns/grid": require("./routes/framework/_501.svelte").default,
        "framework/patterns/modal": require("./routes/framework/_501.svelte").default,
        "framework/patterns/navigation": require("./routes/framework/_501.svelte").default,
        "framework/patterns/search-bar": require("./routes/framework/_501.svelte").default,
        "framework/patterns/tab": require("./routes/framework/patterns/tab.svelte").default,

        /**
         * framework/utilities
         */

        "framework/utilities": require("./routes/framework/_501.svelte").default,
        "framework/utilities/alignment": require("./routes/framework/_501.svelte").default,
        "framework/utilities/background": require("./routes/framework/utilities/background.svelte").default,
        "framework/utilities/color": require("./routes/framework/utilities/color.svelte").default,
        "framework/utilities/display": require("./routes/framework/_501.svelte").default,
        "framework/utilities/flex": require("./routes/framework/_501.svelte").default,
        "framework/utilities/float": require("./routes/framework/_501.svelte").default,
        "framework/utilities/opacity": require("./routes/framework/_501.svelte").default,
        "framework/utilities/overflow": require("./routes/framework/_501.svelte").default,
        "framework/utilities/position": require("./routes/framework/_501.svelte").default,
        "framework/utilities/shadow": require("./routes/framework/_501.svelte").default,
        "framework/utilities/shape": require("./routes/framework/_501.svelte").default,
        "framework/utilities/size": require("./routes/framework/_501.svelte").default,
        "framework/utilities/spacing": require("./routes/framework/_501.svelte").default,
        "framework/utilities/text": require("./routes/framework/_501.svelte").default,
        "framework/utilities/visibility": require("./routes/framework/_501.svelte").default,
        "framework/utilities/z-index": require("./routes/framework/_501.svelte").default
    });
});
