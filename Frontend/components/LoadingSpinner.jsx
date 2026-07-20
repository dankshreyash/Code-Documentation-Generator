const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-600 dark:border-t-violet-400 animate-spin"></div>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
        Generating documentation...
      </p>
    </div>
  );
};

export default LoadingSpinner;
