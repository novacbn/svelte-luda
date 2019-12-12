/**
 * Returns the naive-slugified version of the string, trimming spaces, replacing spaces with dashes, and lower-casing text
 * @param {*} string 
 */
export function get_slug(string) {
    return string
        .trim()
        .replace(/\s\s+/g, " ")
        .replace(/\s/g, "-")
        .toLowerCase();
}