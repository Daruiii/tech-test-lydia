import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useDarkMode } from '../hooks/useDarkMode';
import lydiaLogo from '../assets/lydia-logo.svg';

export const Header = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <header className="bg-transparent">
      <nav className="container mx-auto px-4 py-4 md:px-6 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={lydiaLogo} 
            alt="Lydia" 
            className="h-8 w-auto transition-all duration-300 dark:brightness-0 dark:invert"
          />
        </div>

        <button
          onClick={toggleDark}
          className={clsx(
            "p-2 rounded-full transition-all duration-200",
            "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
            "hover:bg-gray-100 dark:hover:bg-slate-800",
            "focus:outline-none"
          )}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </header>
  );
};
