import React from 'react';
import { ArrowDown, Award, Gamepad2, Star, Users } from 'lucide-react';
import { HERO_BANNER } from '../data';
import { labels, Language } from '../i18n';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreAbout: () => void;
  language: Language;
}

export default function Hero({ onExploreProjects, onExploreAbout, language }: HeroProps) {
  const text = labels[language].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BANNER}
          alt="Cường VM banner"
          className="w-full h-full object-cover opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50"></div>
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vh] rounded-full bg-pink-500/10 blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
          <span className="text-[10px] font-mono tracking-widest text-indigo-300 uppercase font-bold">
            {text.badge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.1] animate-fade-in-up">
          {text.titleA}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            {text.titleB}
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          {text.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button
            onClick={onExploreProjects}
            className="group px-7 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-indigo-950/50 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            id="hero-projects-btn"
          >
            <Gamepad2 className="w-5 h-5 text-indigo-200" />
            {text.projects}
          </button>
          <button
            onClick={onExploreAbout}
            className="px-7 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            id="hero-about-btn"
          >
            {text.about}
          </button>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/50 border border-slate-800/70 backdrop-blur-md p-6 rounded-3xl w-full max-w-5xl shadow-2xl shadow-slate-950/60 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
          id="hero-stats-panel"
        >
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-slate-800/40 md:last:border-none">
            <div className="bg-indigo-600/10 p-2.5 rounded-xl border border-indigo-500/20 text-indigo-400 mb-2">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-white">10+</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{text.stats[0]}</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-3 md:border-r border-slate-800/40">
            <div className="bg-pink-500/10 p-2.5 rounded-xl border border-pink-500/20 text-pink-400 mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-white">6+</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{text.stats[1]}</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-slate-800/40">
            <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-amber-400 mb-2">
              <Star className="w-5 h-5 fill-amber-500/20" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-white">60</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{text.stats[2]}</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-3">
            <div className="bg-purple-500/10 p-2.5 rounded-xl border border-purple-500/20 text-purple-400 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-white">20+</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{text.stats[3]}</div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 animate-bounce cursor-pointer" onClick={onExploreProjects}>
          <span className="text-[10px] font-mono tracking-widest uppercase">{text.scroll}</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
