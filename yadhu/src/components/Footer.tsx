import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-12 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/20 dark:from-emerald-950/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yadhu2001"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/yadhu-krishnan07/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href="mailto:yadhu.k007@gmail.com"
              className="group p-3 rounded-full bg-white dark:bg-gray-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Designed by{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">SURABHI</span>
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
