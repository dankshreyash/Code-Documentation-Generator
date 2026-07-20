import { FiZap, FiTrash2, FiCopy, FiDownload } from "react-icons/fi";

const ActionButtons = ({
  onGenerate,
  onClear,
  onCopy,
  onDownload,
  loading,
  hasDocumentation,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Generate Button */}
      <button
        onClick={onGenerate}
        disabled={loading}
        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <FiZap className="text-lg" />
        {loading ? "Generating..." : "Generate Documentation"}
      </button>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <FiTrash2 />
        Clear
      </button>

      {/* Copy & Download — shown only when documentation exists */}
      {hasDocumentation && (
        <>
          <button
            onClick={onCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FiCopy />
            Copy Docs
          </button>

          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-700/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FiDownload />
            Download .md
          </button>
        </>
      )}
    </div>
  );
};

export default ActionButtons;
