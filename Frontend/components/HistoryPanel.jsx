import {
  FiClock,
  FiTrash2,
  FiSidebar,
  FiFileText,
} from "react-icons/fi";

const HistoryPanel = ({ history, onRestore, onClear, isOpen, onToggle }) => {
  return (
    <aside className="h-screen sticky top-0 shrink-0 flex relative z-40">
      {/* Collapsed Icon Strip — always visible */}
      <div className="w-14 h-full flex flex-col items-center py-4 gap-1 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        {/* Toggle button */}
        <button
          onClick={onToggle}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          title={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <FiSidebar className="text-lg" />
        </button>

        {/* History icon — only shown when collapsed */}
        {!isOpen && (
          <button
            onClick={onToggle}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200"
            title="History"
          >
            <FiClock className="text-lg" />
          </button>
        )}
      </div>

      {/* Expanded Panel — slides in/out */}
      <div
        className={`absolute md:static left-14 top-0 h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "w-64 shadow-2xl md:shadow-none" : "w-0 border-r-0"
        }`}
      >
        <div className="w-64 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              History
            </span>
            {history.length > 0 && (
              <button
                onClick={onClear}
                className="flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                <FiTrash2 className="text-xs" />
                Clear
              </button>
            )}
          </div>

          {/* History Items */}
          <div className="flex-1 overflow-y-auto">
            {history.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <FiFileText className="mx-auto text-2xl text-gray-300 dark:text-gray-600 mb-2" />
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  No history yet
                </p>
              </div>
            ) : (
              <div className="py-1">
                {history.map((entry, index) => (
                  <button
                    key={index}
                    onClick={() => onRestore(entry)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group rounded-lg mx-1"
                    style={{ width: "calc(100% - 8px)" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                        {entry.language}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500">
                        {formatTime(entry.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 truncate leading-snug">
                      {truncate(entry.documentation?.summary, 40)}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const truncate = (text, maxLength = 40) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default HistoryPanel;
