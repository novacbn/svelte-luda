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