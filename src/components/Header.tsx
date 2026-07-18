import React, { useEffect, useState } from 'react';
import { FileText, Gamepad2, Info, Mail, Menu, Rocket, ScrollText, X } from 'lucide-react';
import { labels, languageOptions, Language } from '../i18n';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Header({ activeSection, onNavigate, language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const text = labels[language];
  const isVi = language === 'vi';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: text.nav.hero, icon: Rocket },
    { id: 'projects', label: text.nav.projects, icon: Gamepad2 },
    { id: 'about', label: text.nav.about, icon: Info },
    { id: 'blog', label: text.nav.blog, icon: FileText },
    { id: 'contact', label: text.nav.contact, icon: Mail },
    { id: 'policy', label: isVi ? 'Policy / Terms' : 'Policy / Terms', icon: ScrollText }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const languageSelect = (id: string, compact = false) => (
    <>
      <label className="sr-only" htmlFor={id}>{text.nav.language}</label>
      <select
        id={id}
        value={language}
        onChange={(event) => onLanguageChange(event.target.value as Language)}
        className={`bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-bold uppercase rounded-xl outline-none focus:border-indigo-500 cursor-pointer ${
          compact ? 'w-full px-4 py-3' : 'px-3 py-2.5'
        }`}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => handleItemClick('hero')} className="flex items-center gap-2.5 group cursor-pointer" id="logo-button">
            <div className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-2 rounded-xl shadow-lg shadow-purple-900/30 group-hover:scale-105 transition-transform">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <span className="font-sans font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Cường
              </span>
              <span className="font-mono text-xs font-bold text-indigo-400 block tracking-widest -mt-1 uppercase">
                VM
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-indigo-600/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/40 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {languageSelect('language-select')}
            <button
              onClick={() => handleItemClick('projects')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-950/40 hover:shadow-indigo-600/20 active:scale-95 transition-all cursor-pointer"
              id="header-cta-btn"
            >
              {text.nav.demo}
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900/60 border border-slate-800/60"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-950/95 backdrop-blur-lg z-40 border-t border-slate-900 animate-fade-in-down" id="mobile-nav-menu">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white bg-indigo-600/20 border border-indigo-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 text-indigo-400" />
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-900 space-y-3">
              {languageSelect('mobile-language-select', true)}
              <button
                onClick={() => handleItemClick('projects')}
                className="w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs py-3.5 rounded-xl tracking-wider uppercase shadow-lg shadow-indigo-950/40 cursor-pointer"
              >
                {text.nav.demoNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
