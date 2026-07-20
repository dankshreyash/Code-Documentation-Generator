/**
 * Get basic statistics about the code input.
 * @param {string} code - The source code string.
 * @returns {{ lines: number, characters: number }}
 */
export const getCodeStats = (code) => {
  if (!code.trim()) {
    return { lines: 0, characters: 0 };
  }

  return {
    lines: code.split("\n").length,
    characters: code.length,
  };
};
