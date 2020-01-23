import {router} from "svelte-commons/lib/stores/browser";

import Documentation from "../components/routes/documentation.svelte";
import Index from "../components/routes/index.svelte";
import ScratchPad from "../components/routes/scratchpad.svelte";

/**
 *
 */
export function make_router() {
    return router(
        {
            "": Index,
            documentation: Documentation,
            "documentation/:name": Documentation,
            "documentation/:name/:subname": Documentation,
            scratchpad: ScratchPad
        },
        {hash: true}
    );
}

/**
 *
 * @param {*} views
 * @param {*} paths
 * @param {*} cache
 */
export function walk_router_files(views, paths = [], cache = {}) {
    for (let [key, view] of Object.entries(views)) {
        if (typeof view !== "object") continue;

        if (view.default) {
            let path;
            if (key === "index") path = paths.join("/");
            else path = [...paths, key].join("/");

            cache[path] = view;
        } else {
            walk_router_files(view, [...paths, key], cache);
        }
    }

    return cache;
}
