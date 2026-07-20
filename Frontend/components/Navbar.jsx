import { FiCode, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <FiCode className="text-white text-lg" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              DocGen AI
            </h1>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
