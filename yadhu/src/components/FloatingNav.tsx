import { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, ChevronUp } from 'lucide-react';

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useState(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`fixed right-8 bottom-8 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200 dark:border-emerald-500/30 rounded-full hover:scale-110 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 text-gray-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors" />
              <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 z-40 p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
        style={{ marginBottom: navItems.length * 56 + 16 }}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
}
