import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-gray-950 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-emerald-500 rounded-full animate-spin"
          ></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
            Yadhu Krishnan P S
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Loading Portfolio...</p>
        </div>

        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
          {progress}%
        </div>
      </div>
    </div>
  );
}
