import minimatch from "minimatch";

import {walk_router_files} from "./router";

import FILES_DOCUMENTATION from "../../content/**/*.md";

/**
 * Represents the documentation content parsed into route paths
 */
const DOCUMENTATION_ROUTES = walk_router_files(FILES_DOCUMENTATION);

/**
 * Returns metadata as parsed from the source `html` of a document
 * @param {*} html
 */
function parse_dom(html) {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");

    const title_element = document.querySelector("h1:first-child");
    const description_element = document.querySelector("h2:nth-child(2)");

    let section_elements = Array.from(document.querySelector("h1,h2,h3,h4,h5,h6"));
    section_elements = section_elements.slice(2);

    section_elements = section_elements.map((element, index) => {
        return {
            id: element.getAttribute("id"),
            text: element.innerText
        };
    });

    return {
        description: description_element ? description_element.innerText : "N/A",
        title: title_element ? title_element.innerText : "N/A",
        sections: section_elements
    };
}

/**
 * Returns the Component and metadata assigned to the given documentation `path`
 * @param {*} path
 */
export function get_documentation_route(path) {
    const route = DOCUMENTATION_ROUTES[path];
    if (!route) return null;

    const Component = route.default;

    const parsed = parse_dom(route.SOURCE.html);
    const frontmatter = route.FRONTMATTER;

    const title = frontmatter.title || parsed.title;
    const description = frontmatter.description || parsed.description;

    return {Component, description, path, title};
}

/**
 * Returns all the documentation route paths that match the glob `pattern`
 */
export function get_documentation_routes(pattern) {
    if (pattern) {
        let routes = Object.entries(DOCUMENTATION_ROUTES);
        routes = routes.filter(([route, view]) => minimatch(route, pattern));

        return Object.fromEntries(routes);
    }

    return {...DOCUMENTATION_ROUTES};
}
