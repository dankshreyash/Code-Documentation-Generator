import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import './App.css';

import Navbar from "../components/Navbar";
import LanguageSelect from "../components/LanguageSelect";
import CodeEditor from "../components/CodeEditor";
import ActionButtons from "../components/ActionButtons";
import LoadingSpinner from "../components/LoadingSpinner";
import OutputCard from "../components/OutputCard";
import HistoryPanel from "../components/HistoryPanel";
import Footer from "../components/Footer";

import { generateDocumentation } from "../services/api";
import { copyToClipboard } from "../utils/copyToClipboard";
import { downloadMarkdown } from "../utils/downloadMarkdown";
import { getHistory, saveToHistory, clearHistory } from "../utils/localStorage";

function App() {
  // State
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [documentation, setDocumentation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("docgen_darkMode");
    return saved ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Load history on mount
  useEffect(() => {
    setHistory(getHistory());
  }, []);

  // Toggle dark mode class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("docgen_darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Handlers
  const handleGenerate = async () => {
    if (!code.trim()) {
      toast.error("Please paste some code before generating.");
      return;
    }

    setLoading(true);
    setDocumentation(null);

    try {
      const result = await generateDocumentation(language, code);
      setDocumentation(result);

      const updatedHistory = saveToHistory({
        language,
        code,
        documentation: result,
      });
      setHistory(updatedHistory);

      toast.success("Documentation generated successfully!");
    } catch (error) {
      const message =
        error.response?.data?.detail ||
        error.message ||
        "Failed to generate documentation. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setDocumentation(null);
  };

  const handleCopy = async () => {
    if (!documentation) return;

    const text = `Summary:\n${documentation.summary}\n\nFunctions:\n${documentation.functions}\n\nParameters:\n${documentation.parameters}\n\nExample Usage:\n${documentation.example}`;

    const success = await copyToClipboard(text);
    if (success) {
      toast.success("Copied to clipboard!");
    } else {
      toast.error("Failed to copy to clipboard.");
    }
  };

  const handleDownload = () => {
    if (!documentation) return;
    downloadMarkdown(documentation);
    toast.success("Markdown downloaded!");
  };

  const handleRestore = (entry) => {
    setCode(entry.code);
    setLanguage(entry.language);
    setDocumentation(entry.documentation);
    toast.success("History entry restored!");
  };

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300 flex">
      {/* Left Sidebar — History */}
      <HistoryPanel
        history={history}
        onRestore={handleRestore}
        onClear={handleClearHistory}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1">
          {/* Hero Text */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 dark:from-violet-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Code Documentation Generator
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Paste your source code, select a language, and let AI generate clean documentation instantly.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-6 shadow-sm">
            <LanguageSelect language={language} setLanguage={setLanguage} />
            <CodeEditor code={code} setCode={setCode} />
            <ActionButtons
              onGenerate={handleGenerate}
              onClear={handleClear}
              onCopy={handleCopy}
              onDownload={handleDownload}
              loading={loading}
              hasDocumentation={!!documentation}
            />
          </div>

          {/* Loading */}
          {loading && <LoadingSpinner />}

          {/* Output */}
          {!loading && documentation && <OutputCard documentation={documentation} />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
