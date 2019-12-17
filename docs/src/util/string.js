import lzstring from "lz-string";

/**
 * Returns the supplied `text` compressed, via packaged compression library
 * @param {*} text 
 */
export function compress_text(text) {
    return lzstring.compressToEncodedURIComponent(text);
}

/**
 * Returns the supplied `compressed` decompressed, via packaged compression library
 * @param {*} compressed 
 */
export function decompress_text(compressed) {
    return lzstring.decompressFromEncodedURIComponent(compressed);
}

/**
export function brotli_compress(text) {
    console.log(wasmBrotli);
    const encoded = new TextEncoder("utf-8").encode(text);
    const compressed = wasmBrotli.compress(encoded);

    const decoded = new TextEncoder("utf-8").decode(compressed);
    return btoa(decoded);
}
*/

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
