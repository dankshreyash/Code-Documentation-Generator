import axios from "axios";

const API_BASE_URL = "https://code-documentation-generator.onrender.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

/**
 * Send code to the backend for documentation generation.
 * @param {string} language - The programming language.
 * @param {string} code - The source code.
 * @returns {Promise<object>} - The documentation response.
 */
export const generateDocumentation = async (language, code) => {
  const response = await apiClient.post("/generate", { language, code });
  return response.data;
};
