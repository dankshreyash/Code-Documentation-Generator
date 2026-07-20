import { FiFileText, FiBox, FiSettings, FiPlay } from "react-icons/fi";

const SECTIONS = [
  { key: "summary", title: "Summary", icon: FiFileText, color: "violet" },
  { key: "functions", title: "Functions", icon: FiBox, color: "blue" },
  { key: "parameters", title: "Parameters", icon: FiSettings, color: "emerald" },
  { key: "example", title: "Example Usage", icon: FiPlay, color: "amber" },
];

const COLOR_MAP = {
  violet: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700/50",
    icon: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-100 dark:bg-violet-900/40",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700/50",
    icon: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700/50",
    icon: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-700/50",
    icon: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
  },
};

const OutputCard = ({ documentation }) => {
  if (!documentation) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
        Generated Documentation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SECTIONS.map(({ key, title, icon: Icon, color }) => {
          const colors = COLOR_MAP[color];
          return (
            <div
              key={key}
              className={`rounded-xl border ${colors.border} ${colors.bg} p-5 transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                  <Icon className={`text-base ${colors.icon}`} />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {documentation[key] || "Not available"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutputCard;
