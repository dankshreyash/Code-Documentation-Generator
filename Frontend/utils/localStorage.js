const HISTORY_KEY = "docgen_history";
const MAX_HISTORY = 5;

/**
 * Get documentation history from localStorage.
 * @returns {Array} Array of history entries.
 */
export const getHistory = () => {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/**
 * Save a documentation entry to history.
 * Prepends the new entry and keeps only the last MAX_HISTORY items.
 * @param {object} entry - { language, code, documentation, timestamp }
 */
export const saveToHistory = (entry) => {
  try {
    const history = getHistory();
    const newEntry = {
      ...entry,
      timestamp: new Date().toISOString(),
    };

    history.unshift(newEntry);

    if (history.length > MAX_HISTORY) {
      history.splice(MAX_HISTORY);
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    return history;
  } catch {
    return [];
  }
};

/**
 * Clear all documentation history from localStorage.
 */
export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};
