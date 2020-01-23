import {trim} from "./string";

/**
 * Copies the supplied `text` to the end-user's clipboard
 * @param {*} text
 */
export function copy_text(text) {
    const textarea = document.createElement("textarea");

    document.body.appendChild(textarea);
    textarea.value = text;

    textarea.select();

    document.execCommand("copy");
    textarea.remove();
}

/**
 * Returns a new `URL` based on `location.hash` and `location.origin`
 */
export function get_url() {
    const hash = location.hash ? location.hash.slice(1) : "";
    const origin = trim(location.origin, "/");

    return new URL(`${origin}/${hash}`);
}

/**
 * Returns a new `URLSearchParams` based on `get_url().search`
 */
export function get_search_params(url = null) {
    if (!url) url = get_url();

    return new URLSearchParams(url.search);
}

/**
 * Updates the supplied `key` search param with `value`
 * @param {*} key
 * @param {*} value
 */
export function update_search_param(key, value) {
    const url = get_url();
    const params = get_search_params(url);

    if (value) params.set(key, value.toString());
    else params.delete(key);

    let query_string = params.toString();
    query_string = params.length > 0 ? "?" + query_string : "";

    location.hash = "#" + trim(url.pathname, "/") + query_string;
}
