import React from 'react';
import { Game } from '../types';
import { Star, ArrowRight, Play, Eye, Calendar } from 'lucide-react';

interface GameCardProps {
  key?: string;
  game: Game;
  onSelect: (game: Game) => void;
}

export default function GameCard({ game, onSelect }: GameCardProps) {
  const getStatusStyle = (status: Game['status']) => {
    switch (status) {
      case 'Released':
        return 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
      case 'Beta':
        return 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400';
      case 'In Development':
        return 'bg-amber-500/15 border-amber-500/30 text-amber-400';
    }
  };

  const getStatusLabel = (status: Game['status']) => {
    switch (status) {
      case 'Released':
        return 'ĐÃ PHÁT HÀNH';
      case 'Beta':
        return 'BẢN THỬ NGHIỆM (BETA)';
      case 'In Development':
        return 'ĐANG PHÁT TRIỂN';
    }
  };

  return (
    <div 
      className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] transition-all duration-300 flex flex-col h-full"
      id={`game-card-${game.id}`}
    >
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img 
          src={game.cover} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        {/* Status Tag */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-black tracking-wider border backdrop-blur-md ${getStatusStyle(game.status)}`}>
            {getStatusLabel(game.status)}
          </span>
        </div>

        {/* Rating overlay if released */}
        <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-850 px-2 py-0.5 rounded flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span className="text-xs font-mono font-bold text-white">{game.rating}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Genre & Platform indicator */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold text-indigo-400 tracking-wider uppercase">
              {game.genre}
            </span>
            <div className="flex gap-1">
              {game.platforms.map((plat) => (
                <span 
                  key={plat} 
                  className="bg-slate-800 text-slate-300 text-[8px] font-mono font-black px-1.5 py-0.5 rounded"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-sans font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 line-clamp-1">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {game.description}
          </p>
        </div>

        {/* Card Footer & Interactive actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-600" />
            <span>{game.releaseDate}</span>
          </div>

          <button
            onClick={() => onSelect(game)}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-950/30 group/btn"
          >
            Chi Tiết <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
