import * as svelte from "svelte";
import * as svelte_internal from "svelte/internal";
import * as svelte_store from "svelte/store";

import * as SvelteLuda from "../../../lib/index";
import {VerticalRepl} from "svelte-simple-repl";

import {get_documentation_routes} from "./documentation";
import {replace_brace_entities, replace_path_separators} from "./string";

/**
 *
 */
const REPL_MODULE_MAP = {
    svelte: svelte,
    "svelte/internal": svelte_internal,
    "svelte/store": svelte_store,

    "svelte-luda": SvelteLuda,
    "svelte-luda/lib": SvelteLuda,
    "svelte-luda/lib/components": SvelteLuda.components,
    "svelte-luda/lib/components/base": SvelteLuda.components.base,
    "svelte-luda/lib/components/elements": SvelteLuda.components.elements,
    "svelte-luda/lib/components/patterns": SvelteLuda.components.patterns
};

/**
 * Returns the code examples parsed as `[string, string][]` from the source `html` of a document
 * @param {*} html
 */
function parse_dom(html) {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");

    const code_elements = Array.from(document.querySelectorAll("code[data-meta]"));

    return code_elements.map((element) => {
        const {innerText} = element;
        const id = element.getAttribute("id").slice(5);

        return [id, innerText];
    });
}

/**
 * Returns an object map of every code example from the documentation Markdown
 */
export function get_code_blocks() {
    let routes = get_documentation_routes();
    routes = Object.entries(routes);

    let code_blocks = routes.map(([route, module]) => {
        const {html} = module.SOURCE;

        if (route) route = replace_path_separators(route);
        else route = "framework";

        return parse_dom(html).map(([id, text]) => {
            return [route + "." + id, text];
        });
    });

    code_blocks = code_blocks.flat();

    return Object.fromEntries(code_blocks);
}

/**
 * Hooks into the code blocks of rendered documentation content, fixing
 * curly braces and initializing Svelte REPLs
 * @param {*} parent_selector
 */
export function hook_code_blocks(parent_selector) {
    const parent_element = document.querySelector(parent_selector);
    const code_elements = parent_element.querySelectorAll(`code`);

    for (const element of code_elements) {
        element.innerText = replace_brace_entities(element.innerText);

        if (element.getAttribute("data-meta") === "repl") {
            const {innerText, parentElement} = element;
            const container_element = document.createElement("div");

            parentElement.insertAdjacentElement("beforebegin", container_element);
            parentElement.remove();

            new VerticalRepl({
                target: container_element,
                props: {
                    modules: REPL_MODULE_MAP,
                    value: innerText
                }
            });
        }
    }
}

/**
 * Returns a copy of the REPL module map available for imports
 */
export function get_module_map() {
    return {...REPL_MODULE_MAP};
}
