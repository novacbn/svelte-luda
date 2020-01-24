/**
 * Represents the expression used to replace path separators `/`
 */
const EXPRESSION_PATH_SEP = /\//g;

/**
 * Represents the expression used to replace the left curly brace `{` entity code
 */
const EXPRESSION_LEFT_BRACE = /&#123;/g;

/**
 * Represents the expression used to replace the right curly brace `}` entity code
 */
const EXPRESSION_RIGHT_BRACE = /&#125;/g;

/**
 * Represents the character that replaces the left curly brace `{` entity code
 */
const CHARACTER_LEFT_BRACE = "{";

/**
 * Represents the character that replaces the right curly brace `}` entity code
 */
const CHARACTER_RIGHT_BRACE = "}";

/**
 * Returns the text with the first letter capitalized
 * @param {*} text
 */
export function get_captialized(text) {
    return text[0].toUpperCase() + text.slice(1);
}

/**
 * Replaces all HTML entity code curly braces `{` / `}` with their actual characters
 * @param {*} text
 */
export function replace_brace_entities(text) {
    return text
        .replace(EXPRESSION_LEFT_BRACE, CHARACTER_LEFT_BRACE)
        .replace(EXPRESSION_RIGHT_BRACE, CHARACTER_RIGHT_BRACE);
}

/**
 * Replaces all path separators `/` with dots `.`
 * @param {*} text
 */
export function replace_path_separators(text) {
    return text.replace(EXPRESSION_PATH_SEP, ".");
}
