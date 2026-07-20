/**
 * Copy text to clipboard using the Clipboard API.
 * @param {string} text - The text to copy.
 * @returns {Promise<boolean>} - Whether the copy succeeded.
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
