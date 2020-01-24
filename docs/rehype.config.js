const {join} = require("path");
const {parse} = require("url");

const BananaSlug = require("github-slugger");
const h = require("hastscript");
const toString = require("hast-util-to-string");
const visit = require("unist-util-visit");

const highlight_css = require("highlight.js/lib/languages/css");
const highlight_javascript = require("highlight.js/lib/languages/javascript");
const highlight_json = require("highlight.js/lib/languages/json");
const highlight_markdown = require("highlight.js/lib/languages/markdown");
const highlight_shell = require("highlight.js/lib/languages/shell");
const highlight_xml = require("highlight.js/lib/languages/xml");

/**
 * Represents the working directory for the Markdown content
 */
const CONTENT_CWD = join(process.cwd(), "content");

/**
 * Represents the HTML element tags accepted as a section header
 */
const HEADER_ELEMENTS = {
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true
};

/**
 * Represents the classes added to a section header link
 */
const HEADER_LINK_CLASSES = "c-primary";

/**
 * Represents the text used to display a section header link
 */
const HEADER_LINK_TEXT = "#";

/**
 * Returns the corrected documentation link
 *
 * e.g. `./base/paragraph.md` -> `#documentation/base/paragraph`
 *
 * @param {*} dirname
 * @param {*} href
 */
function get_documentation_link(dirname, href) {
    // We need to remove the absolute filesystem prefixing path,
    // if it is present in either file path
    if (dirname.indexOf(CONTENT_CWD) > -1) dirname = dirname.slice(CONTENT_CWD.length);
    if (href.indexOf(CONTENT_CWD) > -1) href = href.slice(CONTENT_CWD.length);

    // Prefix `dirname`, if the href path doesn't have it prefixed
    if (href.indexOf(dirname) === -1) href = join(dirname, href);

    href = join("documentation", href);

    return "#" + remove_link_trailers(href);
}

/**
 * Returns if the link is to an absolute application page
 * @param {*} href
 * @param {*} url
 */
function is_absolute_link(href, url) {
    return url.path && url.path.startsWith("/");
}

/**
 * Returns if the link is to an external page
 * @param {*} href
 * @param {*} url
 */
function is_external_link(href, url) {
    return !!url.protocol;
}

/**
 * Returns if the link is to an internal document
 * @param {*} href
 * @param {*} url
 */
function is_internal_link(href, url) {
    return url.path && (url.path.startsWith("./") || url.path.startsWith("../"));
}

/**
 * Returns if the link is a selector to specific HTML element ID
 * @param {*} href
 * @param {*} url
 */
function is_selector_link(href, url) {
    return href.startsWith("#");
}

/**
 *
 * @param {*} href
 */
function remove_link_trailers(href) {
    if (href.endsWith(".md")) href = href.slice(0, -3);
    if (href.endsWith("/index")) href = href.slice(0, -6);

    return href;
}

/**
 * Adds `.id` property to all Markdown header elements (e.g. `<h1>`, `<h2>`) with GitHub slugs of their text
 */
function add_header_properties() {
    const slugs = BananaSlug();

    return (ast) => {
        visit(ast, "element", (node) => {
            if (!HEADER_ELEMENTS[node.tagName]) return;

            const text = toString(node);
            const slug = slugs.slug(text);

            node.properties.id = slug;
        });
    };
}

/**
 * Adds an anchor element to all Markdown header elements (e.g. `<h1>`, `<h2>`) with `?selector=` parameter to their slugs
 */
function add_header_children() {
    return (ast, vfile) => {
        visit(ast, "element", (node) => {
            if (!HEADER_ELEMENTS[node.tagName]) return;

            // We need to make sure the title and description headers aren't included
            const {line} = node.position.start;
            if (line < 4) return;

            const {id} = node.properties;
            if (!id) return;

            const {children} = node;

            const href = "#" + id;
            const element = h("a", {class: HEADER_LINK_CLASSES, href}, [HEADER_LINK_TEXT]);

            children.unshift(element);
        });
    };
}

/**
 * Updates all Markdown relative links to conform to `#documentation/path/to/something` and
 * applies `target="_blank"` and `rel="noopener"` to external links
 *
 * e.g. `./base/paragraph.md` -> `#documentation/base/paragraph`
 */
function update_anchor_properties() {
    return (ast, vfile) => {
        visit(ast, "element", (node) => {
            if (node.tagName !== "a") return;

            let {href} = node.properties;
            if (!href) return;

            const url = parse(href);
            if (is_external_link(href, url)) {
                node.properties.target = "_blank";
                node.properties.rel = "noopener";
            } else if (is_internal_link(href, url)) {
                const {path} = url;
                const {dirname} = vfile;

                href = get_documentation_link(dirname, path);
            } else if (is_absolute_link(href, url)) {
                href = "#" + url.path.slice(1);
            } else if (is_selector_link(href, url)) {
                const {dirname, path} = vfile;

                href = "?selector=" + href.slice(1);
                href = get_documentation_link(dirname, path) + href;
            }

            node.properties.href = href;
        });
    };
}

/**
 * Updates all Markdown codeblocks HTML output `<pre>` to include the `code` Luda
 * and their parent header id
 *
 * e.g.
 *
 * ```html
 * <h1 id="some-slug">...</h1>
 *
 * <pre>
 *     <code data-meta="repl">...</code>
 * </pre>
 * ```
 *
 * becomes:
 *
 * ```html
 * <h1 id="some-slug">...</h1>
 *
 * <pre class="code">
 *     <code id="repl-some-slug-1" data-meta="repl">...</code>
 * </pre>
 * ```
 */
function update_code_properties() {
    return (ast) => {
        let header_count = 1;
        let header_id = "";

        visit(ast, "element", (node) => {
            if (HEADER_ELEMENTS[node.tagName] && node.properties.id) {
                header_count = 1;
                header_id = "-" + node.properties.id;
            } else if (node.tagName === "pre") {
                if (node.children.length !== 1) return;

                const [child_node] = node.children;
                if (child_node.tagName !== "code") return;

                node.properties.className = ["code"];
                if (child_node.properties["data-meta"]) {
                    if (header_count > 1) {
                        child_node.properties.id = `repl${header_id}-${header_count}`;
                    } else child_node.properties.id = `repl${header_id}`;

                    header_count += 1;
                }
            }
        });
    };
}

module.exports = {
    plugins: [
        add_header_properties,
        add_header_children,
        update_anchor_properties,
        update_code_properties,

        [
            "rehype-highlight",
            {
                languages: {
                    bash: highlight_shell,
                    css: highlight_css,
                    html: highlight_xml,
                    javascript: highlight_javascript,
                    js: highlight_javascript,
                    json: highlight_json,
                    markdown: highlight_markdown,
                    md: highlight_markdown,
                    sh: highlight_shell,
                    shell: highlight_shell,
                    xml: highlight_xml
                },

                ignoreMissing: true
            }
        ]
    ]
};
