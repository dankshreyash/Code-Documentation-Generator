import { getCodeStats } from "../utils/codeStats";

const CodeEditor = ({ code, setCode }) => {
  const stats = getCodeStats(code);

  return (
    <div className="flex flex-col">
      <label
        htmlFor="code-editor"
        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
      >
        Source Code
      </label>
      <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-violet-500/50 focus-within:border-violet-500 transition-all duration-200">
        <textarea
          id="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your source code here..."
          rows={14}
          spellCheck={false}
          className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 font-mono text-sm leading-relaxed resize-none focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        {/* Stats bar */}
        <div className="flex items-center justify-end gap-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
          <span>{stats.lines} lines</span>
          <span>{stats.characters} characters</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
