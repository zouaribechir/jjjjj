import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-lg text-[#A7B0BC] hover:text-[#F5F7FA] hover:bg-[#181D23] dark:hover:bg-[#181D23] transition-colors duration-150 border border-transparent hover:border-[#252B33] focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/50 ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#A7B0BC] hover:text-[#F5F7FA]" />
      ) : (
        <Moon className="w-5 h-5 text-[#64748B] hover:text-[#0F172A]" />
      )}
    </button>
  );
}
