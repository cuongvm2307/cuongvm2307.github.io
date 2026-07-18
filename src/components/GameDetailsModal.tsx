import React, { useState } from 'react';
import { Game } from '../types';
import { 
  X, Star, Calendar, Download, Server, CheckCircle2, 
  Gamepad, Play, Info, Layers
} from 'lucide-react';
import MiniGameSimulator from './MiniGameSimulator';

interface GameDetailsModalProps {
  game: Game;
  onClose: () => void;
}

export default function GameDetailsModal({ game, onClose }: GameDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'demo'>('info');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fade-in"
      id="game-details-modal-overlay"
    >
      <div 
        className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden my-8 animate-scale-up"
        id="game-details-modal"
      >
        {/* Banner header image */}
        <div className="relative h-64 sm:h-80 bg-slate-950">
          <img 
            src={game.cover} 
            alt={game.title} 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white p-2.5 rounded-full border border-slate-800 backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-105"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono font-black text-indigo-400 tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded border border-indigo-500/20 backdrop-blur-md mb-2 inline-block">
              {game.genre}
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black text-white leading-tight drop-shadow-md">
              {game.title}
            </h2>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-2 flex gap-4">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-2 font-bold text-xs tracking-wider uppercase border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'info'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Info className="w-4 h-4" /> Chi Tiết Game
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-2 font-bold text-xs tracking-wider uppercase border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-4 h-4 fill-current text-indigo-400" /> Trải Nghiệm Demo
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto" id="modal-scrollable-content">
          {activeTab === 'info' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main column */}
              <div className="md:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-2">Giới thiệu cốt truyện</h4>
                  <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
                    {game.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-3">Tính năng nổi bật</h4>
                  <ul className="space-y-2.5">
                    {game.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300 font-normal">
                        <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshots */}
                <div>
                  <h4 className="text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-3">Hình ảnh trong game</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {game.screenshots.map((screen, idx) => (
                      <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                        <img 
                          src={screen} 
                          alt={`Screenshot ${idx + 1}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar column */}
              <div className="space-y-6">
                {/* Game facts card */}
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <h5 className="text-white text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-2">Thông Số Dự Án</h5>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Trạng thái:</span>
                      <span className="text-indigo-300 font-bold">{game.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Ngày ra mắt:</span>
                      <span className="text-slate-300">{game.releaseDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Nền tảng:</span>
                      <span className="text-slate-300">{game.platforms.join(' / ')}</span>
                    </div>
                    {game.downloads && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Quy mô tải:</span>
                        <span className="text-slate-300 font-bold">{game.downloads}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Xếp hạng:</span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-500" /> {game.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hardware specs */}
                {game.specs && (
                  <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3.5">
                    <h5 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-indigo-400" /> Cấu Hình PC
                    </h5>

                    <div className="space-y-3">
                      <div>
                        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">CẤU HÌNH TỐI THIỂU:</div>
                        <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">{game.specs.minimum}</div>
                      </div>
                      <div className="pt-2 border-t border-slate-800/40">
                        <div className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest font-bold">CẤU HÌNH KHUYÊN DÙNG:</div>
                        <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">{game.specs.recommended}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="py-2">
              <div className="text-center mb-6 max-w-md mx-auto">
                <p className="text-slate-400 text-xs">
                  Trải nghiệm nhanh bản demo mô phỏng lối chơi cốt lõi của <strong className="text-white font-medium">{game.title}</strong> ngay trong trình duyệt của bạn với âm thanh và cơ chế đầy sống động!
                </p>
              </div>

              {/* MiniGame Simulator */}
              <MiniGameSimulator demoType={game.demoType} gameTitle={game.title} />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center">
          <span className="text-[10px] font-mono text-slate-500">Cường VM - Unity Developer Portfolio</span>
          {activeTab === 'info' && (
            <button
              onClick={() => setActiveTab('demo')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
            >
              Chơi Thử Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
