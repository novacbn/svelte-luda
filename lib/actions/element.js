import {class_passthrough} from "svelte-commons/lib/actions";

import {UTILITY_CLASS_NAMES} from "../util/luda";

/**
 * Returns the standardized options for `string_guard`
 * @param {*} options
 */
function StringOptions(options = {}) {
    return {
        enum: [],
        format: "",
        ignore_case: false,
        property: "Component.unknown",
        ...options
    };
}

/**
 * Represents a Svelte Action for passing through Luda classes as properties
 *
 * ```html
 * <script>
 *  import {luda_classes} from "svelte-luda/lib/actions";
 * </script>
 *
 * <!--
 *  By using `luda_classes` as a `use:*` direction, end-developers can utilize any
 *  Luda class as a property passthrough.
 *
 *  e.g. <YourComponent c-danger bc-dark />
 *
 *  Which will add the class to the `HTMLElement`. End-developers can also supply truthy
 *  values to dynamically toggle the class
 *
 *  e.g. `<YourComponent c-danger={some_value} />
 * -->
 * <div use:luda_classes={$$props}>
 *  ...some content...
 * </div>
 * ```
 */
export const luda_classes = class_passthrough(Object.values(UTILITY_CLASS_NAMES));

/**
 * Represents a Svelte Action for passing through validated dynamic classes as properties
 *
 * ```html
 *
 * ```
 *
 * @param {*} options
 */
export function string_guard(options = {}) {
    options = StringOptions(options);

    const {format, ignore_case, property} = options;

    let enumeration = options.enum;
    if (enumeration) enumeration = new Set(enumeration);

    return (element, is_returned = false) => {
        let last_value;

        function check(value) {
            if (typeof value !== "string") {
                throw new Error(`bad change '${property}' (expected string value got '${value}')`);
            }

            if (!value) return;

            // Allow the end-developer to set values to be case-insensitive, e.g.
            // <Button color="priMARY" />
            // is lower-cased to:
            // <Button color="primary" />
            if (ignore_case) value = value.toLowerCase();

            // Allow the end-developer to only accept a strict range of string values
            if (enumeration && !enumeration.has(value)) {
                throw new Error(
                    `bad change '${property}' (expected restricted value got '${value}')`
                );
            }

            // Allow the end-developer to provide a format string, e.g.
            //
            // <Button color="primary" />
            //
            // with a format string of "c-%s", is changed to:
            //
            // <Button color="c-primary" />
            if (format) value = format.replace("%s", value);

            return value;
        }

        function update(value) {
            if (last_value) element.classList.remove(last_value);

            value = check(value);

            element.classList.add(value);
            last_value = value;
        }

        // If `is_returned` is truthy, then the function is being ran as
        // a regular function with `element` being treated as the input.
        if (is_returned) return check(element);

        return {check, update};
    };
}
