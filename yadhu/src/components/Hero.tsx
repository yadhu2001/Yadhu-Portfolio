import { Github, Linkedin, Mail, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = ['Full Stack Developer', 'Python Django Expert', 'React Specialist', 'AWS Cloud Engineer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/30 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse animate-morph"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000 animate-morph"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 animate-morph"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))` }}
        ></div>
      </div>

      <div className="absolute inset-0">
        <Sparkles className="absolute top-20 left-10 w-4 h-4 text-emerald-400 animate-pulse" style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }} />
        <Sparkles className="absolute top-40 right-20 w-5 h-5 text-cyan-400 animate-pulse delay-300" style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }} />
        <Sparkles className="absolute bottom-40 left-1/4 w-4 h-4 text-blue-400 animate-pulse delay-700" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }} />
        <Sparkles className="absolute bottom-20 right-1/3 w-5 h-5 text-emerald-400 animate-pulse delay-1000" style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border border-emerald-200 dark:border-emerald-500/30 rounded-full shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Available for Opportunities</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white mb-2">
                  Yadhu Krishnan P S
                </span>
                <div className="relative flex items-center justify-center lg:justify-start">
                  <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl animate-gradient">
                    {text}
                  </span>
                  <span className="text-emerald-500 text-3xl sm:text-4xl lg:text-5xl animate-blink ml-1">|</span>
                </div>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting exceptional web applications with modern technologies and creative solutions.
                Specialized in building scalable, efficient, and user-centric software.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/surabhisuresh24"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/surabhi-l-6001a128b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors" />
              </a>
              <a
                href="mailto:surabeesuresh@gmail.com?subject=Hello%20Surabhi&body=Hi%20Surabhi%2C%0A"

                className="group p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>

              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="/yadhu.jpeg"
                    alt="yadhu"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-2xl animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
