import rlite from "./rlite";

import luda from "../../dist/svelte-luda.umd.js";

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

        if (document.body.innerHTML) document.body.innerHTML = "";
        window.route_component = router(hash);
    }

    /**
     * Replaces the `<body>` HTML content on 404
     */
    function on_not_found() {
        document.body.innerHTML = "<h1>404: ROUTE NOT FOUND</h1>";
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
        test: require("./routes/test.svelte").default,

        /**
         * framework/base
         */
        "framework/base/table": require("./routes/framework/base/table.svelte").default,

        /**
         * framework/elements
         */
        "framework/elements": require("./routes/framework/elements/index.svelte").default,
        "framework/elements/button": require("./routes/framework/elements/button.svelte").default,

        /**
         * framework/utilities
         */
        "framework/utilities/background": require("./routes/framework/utilities/background.svelte").default,
        "framework/utilities/color": require("./routes/framework/utilities/color.svelte").default
    });
});
