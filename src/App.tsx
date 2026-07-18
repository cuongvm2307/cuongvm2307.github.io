import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import PolicyTermsSection from './components/PolicyTermsSection';
import Footer from './components/Footer';
import GameDetailsModal from './components/GameDetailsModal';
import { Game } from './types';
import { playSound } from './utils/audio';
import { getGames, labels, Language } from './i18n';

type ProjectFilter = 'all' | 'rpg' | 'action' | 'cozy';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('cuongvm_language');
    if (saved === 'vi' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
  });

  const text = labels[language];
  const games = getGames(language);
  const projectFilters: ProjectFilter[] = ['all', 'rpg', 'action', 'cozy'];

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('cuongvm_language', language);
  }, [language]);

  useEffect(() => {
    const saved = localStorage.getItem('cuongvm_language');
    if (saved === 'vi' || saved === 'en') return;

    const controller = new AbortController();
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((geo) => {
        if (!geo?.country_code) return;
        setLanguage(geo.country_code === 'VN' ? 'vi' : 'en');
      })
      .catch(() => {
        setLanguage(navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en');
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'blog', 'contact', 'policy'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredGames = games.filter((game) => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'rpg') return game.genre.includes('RPG') || game.genre.includes('Gameplay') || game.genre.includes('Action');
    if (projectFilter === 'action') return game.genre.includes('Multiplayer') || game.genre.includes('Realtime') || game.genre.includes('Co-op');
    if (projectFilter === 'cozy') return game.genre.includes('Tools') || game.genre.includes('Casual') || game.genre.includes('LiveOps');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans scroll-smooth selection:bg-indigo-500/30 selection:text-white" id="cuongvm-app-root">
      <div className="fixed top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none z-0"></div>

      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="relative z-10">
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onExploreAbout={() => handleNavigate('about')}
          language={language}
        />

        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-950 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
                  {text.projects.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
                  {text.projects.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3.5 max-w-xl font-normal leading-relaxed">
                  {text.projects.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5" id="project-filters">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setProjectFilter(filter);
                      playSound.twinkle();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                      projectFilter === filter
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-950/20'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {text.projects.filters[filter]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="games-grid-container">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  language={language}
                  onSelect={(g) => {
                    setSelectedGame(g);
                    playSound.twinkle();
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <AboutSection language={language} />
        <BlogSection language={language} />
        <ContactSection language={language} games={games} />
        <PolicyTermsSection language={language} />
      </main>

      <Footer onNavigate={handleNavigate} language={language} />

      {selectedGame && (
        <GameDetailsModal
          game={selectedGame}
          onClose={() => {
            setSelectedGame(null);
            playSound.twinkle();
          }}
        />
      )}
    </div>
  );
}
