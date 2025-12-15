import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import PageLoader from './components/PageLoader';
import FloatingNav from './components/FloatingNav';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen relative transition-colors duration-500">
      <PageLoader />
      <CursorGlow />
      <ParticlesBackground />
      <ThemeToggle />
      <Navigation activeSection={activeSection} />
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
