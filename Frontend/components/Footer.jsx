import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700/50 py-6 mt-12">
      <p className="text-center text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5">
        Built with <FiHeart className="text-red-400 text-xs" /> using React & FastAPI
      </p>
    </footer>
  );
};

export default Footer;
