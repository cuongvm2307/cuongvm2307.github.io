import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GameDetailsModal from './components/GameDetailsModal';
import { GAMES_DATA } from './data';
import { Game } from './types';
import { Gamepad2, Filter, Sparkles, Award } from 'lucide-react';
import { playSound } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [projectFilter, setProjectFilter] = useState<'Tất cả' | 'Nhập Vai' | 'Hành Động' | 'Cozy'>('Tất cả');

  // Multi-section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset for nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter games based on category
  const filteredGames = GAMES_DATA.filter(game => {
    if (projectFilter === 'Tất cả') return true;
    if (projectFilter === 'Nhập Vai') return game.genre.includes('RPG') || game.genre.includes('Vai');
    if (projectFilter === 'Hành Động') return game.genre.includes('Action') || game.genre.includes('Shooter') || game.genre.includes('Hành Động');
    if (projectFilter === 'Cozy') return game.genre.includes('Cozy') || game.genre.includes('Simulation') || game.genre.includes('Nhịp độ chậm');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans scroll-smooth selection:bg-indigo-500/30 selection:text-white" id="hanhi-app-root">
      {/* Dynamic glow blobs */}
      <div className="fixed top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none z-0"></div>

      {/* Header element */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content elements */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <Hero 
          onExploreProjects={() => handleNavigate('projects')}
          onExploreAbout={() => handleNavigate('about')}
        />

        {/* PRODUCTS / PORTFOLIO SECTION */}
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-950 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Headings */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
                  DANH MỤC SẢN PHẨM
                </span>
                <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
                  DỰ ÁN TIÊU BIỂU
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3.5 max-w-xl font-normal leading-relaxed">
                  Từ những thế giới mở nhập vai rộng lớn cho đến những vũ trụ hành động tương lai hay thung lũng nông trại yên ả chữa lành, khám phá thế giới tuyệt vời chúng tôi xây dựng.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5" id="project-filters">
                {(['Tất cả', 'Nhập Vai', 'Hành Động', 'Cozy'] as const).map((filter) => (
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
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Game Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="games-grid-container">
              {filteredGames.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onSelect={(g) => {
                    setSelectedGame(g);
                    playSound.twinkle();
                  }} 
                />
              ))}
            </div>

          </div>
        </section>

        {/* ABOUT / INTRO SECTION */}
        <AboutSection />

        {/* NEWS / BLOG SECTION */}
        <BlogSection />

        {/* CONTACT SECTION */}
        <ContactSection />

      </main>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* DETAIL MODAL OVERLAY */}
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
