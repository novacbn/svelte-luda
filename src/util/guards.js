/**
 * Returns a guard to only accept values from a restricted subset
 * @param {*} property
 * @param {*} values
 * @param {*} ignore_case
 */
export function select_guard(property, values, ignore_case = false) {
    return (value) => {
        // If the end-developer requires, we can support case-insensitive values, e.g.
        // <Button color="priMARY" />
        // is equal to:
        // <Button color="primary" />
        if (ignore_case) value = value.toLowerCase();

        // If the value provided is in the provided subset, return it,
        // otherwise throw a detailed exception
        if (values.indexOf(value) > -1) return value;
        throw new Error(`bad change '${property}' (expected restricted value got '${value}')`);
    };
}

/**
 * Returns a guard to only accept values from a restricted subset, returning a string formatted value
 * @param {*} property
 * @param {*} format
 * @param {*} values
 * @param {*} ignore_case
 */
export function select_format(property, format, values, ignore_case = false) {
    return (value) => {
        // Since we're doing string operations, we obviously want to guard against non-string values
        if (typeof value !== "string") {
            throw new Error(`bad change '${property}' (expected string value got '${value}')`);
        }

        // If the end-developer requires, we can support case-insensitive values, e.g.
        // <Button color="priMARY" />
        // is equal to:
        // <Button color="primary" />
        if (ignore_case) value = value.toLowerCase();

        // If the value provided is in the provided subset, prefix / postfix it and return,
        // otherwise throw a detailed exception
        if (values.indexOf(value) > -1) return format.replace("%s", value);
        throw new Error(`bad change '${property}' (expected restricted value got '${value}')`);
    };
}

/**
 * Returns a guard to only accept values from a restricted subset, returning a string formatted value
 * While also allowing support of a "negative" format, if a value that starts with a minus "-" symbol
 * @param {*} property
 * @param {*} positive_format
 * @param {*} negative_format
 * @param {*} values
 * @param {*} ignore_case
 */
export function select_format_signed(
    property,
    positive_format,
    negative_format,
    values,
    ignore_case = false
) {
    const positive_guard = select_format(property, positive_format, values, ignore_case);
    const negative_guard = select_format(property, negative_format, values, ignore_case);

    return (value) => {
        // If the value starts with a minus "-" symbol, use the "negative guard" instead with the minus symbol removed
        if (value.charAt(0) === "-") return negative_guard(value.substr(1));
        return positive_guard(value);
    };
}
