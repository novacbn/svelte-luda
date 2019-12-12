/**
 * Represents the
 */
const HTML_NATIVE_ATTRIBUTES = {
    alt: true,
    id: true,
    style: true,
    title: true
};

/**
 * Returns a `Object<string, any>` of properties that are native HTML5 attributes
 * @param {*} props
 */
export function get_attributes(props) {
    let attributes = Array.from(Object.entries(props));
    attributes = attributes.filter((prop) => HTML_NATIVE_ATTRIBUTES[prop[0]]);

    const ret = {};
    for (const attribute of attributes) ret[attribute[0]] = attribute[1];

    return ret;
}
