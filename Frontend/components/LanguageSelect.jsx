import { FiChevronDown } from "react-icons/fi";

const LANGUAGES = ["Python", "JavaScript", "TypeScript", "Java", "C++"];

const LanguageSelect = ({ language, setLanguage }) => {
  return (
    <div className="relative">
      <label
        htmlFor="language-select"
        className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
      >
        Programming Language
      </label>
      <div className="relative">
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200 cursor-pointer"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default LanguageSelect;
