import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useDarkMode } from '../hooks/useDarkMode';
import { SCROLL_THRESHOLD } from '../config/constants';
import lydiaLogo from '../assets/lydia-logo.svg';

export const Header = () => {
  const { isDark, toggleDark } = useDarkMode();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < SCROLL_THRESHOLD) {
        setIsVisible(true);
      } 
      else if (currentScrollY > SCROLL_THRESHOLD && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50",
      "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md",
      "border-b border-gray-200/50 dark:border-gray-700/50",
      "transition-transform duration-1000 ease-in-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
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
