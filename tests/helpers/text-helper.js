/**
 *
 * Given a DOM element, read the text and split into an array of trimmed,
 * non-empty parts.
 *
 * @param {Node} node
 * @returns Array<string>
 */
const getTextParts = node =>
  node.textContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line)

export { getTextParts }
