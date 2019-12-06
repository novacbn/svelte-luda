/**
 *
 * @param {*} property
 * @param {*} values
 * @param {*} ignore_case
 */
export function select_guard(property, values, ignore_case = false) {
    return (value) => {
        if (ignore_case) value = value.toLowerCase();
        if (values.indexOf(value) > -1) return value;

        throw new Error(`bad change '${property}' (expected restricted value got '${value}')`);
    };
}

/**
 *
 * @param {*} property
 * @param {*} prefix
 * @param {*} values
 * @param {*} ignore_case
 */
export function select_prefix(property, prefix, postfix, values, ignore_case = false) {
    return (value) => {
        if (ignore_case) value = value.toLowerCase();
        if (values.indexOf(value) > -1) return prefix + value + postfix;

        throw new Error(`bad change '${property}' (expected restricted value got '${value}')`);
    };
}
