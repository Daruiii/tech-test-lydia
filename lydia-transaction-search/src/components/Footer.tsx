import { Github } from 'lucide-react';
import lydiaLogo from '../assets/lydia-solutions-logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 mt-auto py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img 
            src={lydiaLogo} 
            alt="Lydia Solutions" 
            className="h-6 w-auto transition-all duration-300 dark:brightness-0 dark:invert"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Lydia Solutions. Tous droits réservés.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Daruiii/tech-test-lydia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm font-medium">Github Repository</span>
          </a>
        </div>
      </div>
    </footer>
  );
};