import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
            theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
            theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
          }`}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
    </button>
  );
}
