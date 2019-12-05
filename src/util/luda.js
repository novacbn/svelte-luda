/**
 * Represents the standardized color names provided by Luda classes and utilities
 */
export const COLOR_NAMES = {
    danger: "danger",
    dark: "dark",
    emphasis: "emphasis",
    inverse_muted: "inverse-muted",
    inverse_main: "inverse-main",
    inverse_emphasis: "inverse-emphasis",
    light: "light",
    main: "main",
    muted: "muted",
    primary: "primary",
    secondary: "secondary"
};

/**
 * Represents the standardized size names provided by Luda classes and utilities
 */
export const SIZE_NAMES = {
    auto: "auto",
    fluid: "fluid",
    large: "large",
    medium: "medium",
    none: "none",
    small: "small",
    tiny: "tiny"
};

/**
 * Represents the utility classes provided by Luda
 */
export const UTILITY_CLASS_NAMES = {
    /**
     * `bc-*` background color utility classes
     */

    bc_danger: "bc-danger",
    bc_dark: "bc-dark",
    bc_emphasis: "bc-emphasis",
    bc_inverse_muted: "bc-inverse-muted",
    bc_inverse_main: "bc-inverse-main",
    bc_inverse_emphasis: "bc-inverse-emphasis",
    bc_light: "bc-light",
    bc_main: "bc-main",
    bc_muted: "bc-muted",
    bc_none: "bc-none",
    bc_primary: "bc-primary",
    bc_secondary: "bc-secondary",

    /**
     * `bi-*` background image utility classes
     */

    bi_none: "bi_none",

    /**
     * `bs-*` background size utility classes
     */

    bs_cover: "bs-cover",
    bs_contain: "bs-contain",
    bs_auto: "bs-auto",
    bs_100_auto: "bs-100-auto",
    bs_auto_100: "bs-auto-100",

    /**
     * `c-*` color utility classes
     */

    c_danger: "c-danger",
    c_dark: "c-dark",
    c_emphasis: "c-emphasis",
    c_inverse_muted: "c-inverse-muted",
    c_inverse_main: "c-inverse-main",
    c_inverse_emphasis: "c-inverse-emphasis",
    c_light: "c-light",
    c_main: "c-main",
    c_muted: "c-muted",
    c_primary: "c-primary",
    c_secondary: "c-secondary"
};

/**
 * Represents a lookup `Object<string, boolean>` so `parse_utility` can operate constant speed
 */
const UTILITY_CLASS_LOOKUP = Object.values(UTILITY_CLASS_NAMES).reduce((lookup, value) => {
    lookup[value] = true;

    return lookup;
}, {});

/**
 * Sorts the property keys by case-insensitive alphabetical
 * @param {*} property_a
 * @param {*} property_b
 */
function sort_properties(property_a, property_b) {
    property_a = property_a.toLowerCase();
    property_b = property_b.toLowerCase();

    if (property_a > property_b) return -1;
    else if (property_a < property_b) return 1;
    return 0;
}

/**
 * Returns a space-separated string of Luda utility class names, applicable
 * to the supplied Component properties
 * @param {*} props
 */
export function parse_utility(props) {
    const class_names = [];
    const properties = Object.keys(props);

    // We should sort the property key names here, that
    // way output can be consistent and reproducible
    properties.sort(sort_properties);

    for (let property of properties) {
        property = property.toLowerCase();

        if (UTILITY_CLASS_LOOKUP[property]) class_names.push(property);
    }

    return class_names.join(" ");
}
