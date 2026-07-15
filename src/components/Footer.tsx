import React from 'react';
import { Gamepad2, ArrowUp, Github, Send } from 'lucide-react';
import { playSound } from '../utils/audio';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { label: 'Discord', url: '#', color: 'hover:text-indigo-400' },
    { label: 'Steam', url: '#', color: 'hover:text-blue-400' },
    { label: 'YouTube', url: '#', color: 'hover:text-red-500' },
    { label: 'Facebook', url: '#', color: 'hover:text-blue-500' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  const scrollToTop = () => {
    playSound.twinkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/80 pt-16 pb-8 text-slate-400 relative" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900/60">
          
          {/* Column 1: Studio Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => handleLinkClick('hero')}>
              <div className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-2 rounded-xl shadow-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-sans font-black text-lg tracking-tight text-white">
                  HANHI
                </span>
                <span className="font-mono text-[10px] font-bold text-indigo-400 block tracking-widest -mt-1 uppercase">
                  GAMES
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-450 leading-relaxed max-w-sm font-normal">
              HanHi Games là studio tiên phong thiết kế game chất lượng cao mang bản sắc văn hóa Việt Nam. Chúng tôi cam kết đưa những trải nghiệm đỉnh cao vươn xa toàn cầu.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((sc) => (
                <a 
                  key={sc.label} 
                  href={sc.url} 
                  className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors ${sc.color}`}
                >
                  [{sc.label}]
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Danh Mục</h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <button onClick={() => handleLinkClick('hero')} className="text-left hover:text-white transition-colors cursor-pointer">Trang Chủ</button>
              <button onClick={() => handleLinkClick('projects')} className="text-left hover:text-white transition-colors cursor-pointer">Sản Phẩm Nổi Bật</button>
              <button onClick={() => handleLinkClick('about')} className="text-left hover:text-white transition-colors cursor-pointer">Giới Thiệu Studio</button>
              <button onClick={() => handleLinkClick('blog')} className="text-left hover:text-white transition-colors cursor-pointer">Tin Tức & Blog Dev</button>
              <button onClick={() => handleLinkClick('contact')} className="text-left hover:text-white transition-colors cursor-pointer">Liên Hệ Hợp Tác</button>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Nhận Tin Mới</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
              Đăng ký email để nhận bản tin cập nhật phát hành và mã mời chơi thử Closed Beta sớm nhất.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn"
                className="bg-slate-900 border border-slate-800/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-indigo-500 outline-none w-full"
              />
              <button 
                onClick={() => playSound.twinkle()}
                className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom part */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-slate-500">
          <div>
            &copy; 2026 HanHi Games Studio. Bảo lưu mọi quyền lợi. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-slate-300">Chính sách bảo mật</a>
            <button 
              onClick={scrollToTop} 
              className="bg-slate-900 border border-slate-800 p-2 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Lên Đầu Trang
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
