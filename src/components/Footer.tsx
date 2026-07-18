import React from 'react';
import { ArrowUp, Gamepad2, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Language } from '../i18n';
import { playSound } from '../utils/audio';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  language: Language;
}

export default function Footer({ onNavigate, language }: FooterProps) {
  const isVi = language === 'vi';
  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/cuongvm2307', icon: Github, color: 'hover:text-white' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cuong-vu-532621119/', icon: Linkedin, color: 'hover:text-blue-400' },
    { label: 'Email', url: 'mailto:cuongvm2307@gmail.com', icon: Mail, color: 'hover:text-indigo-400' }
  ];
  const links = [
    ['hero', isVi ? 'Trang Chủ' : 'Home'],
    ['projects', isVi ? 'Project Unity' : 'Unity Projects'],
    ['about', isVi ? 'Kinh Nghiệm' : 'Experience'],
    ['blog', isVi ? 'Ghi Chú Dev' : 'Dev Notes'],
    ['contact', isVi ? 'Liên Hệ Join Project' : 'Project Contact'],
    ['policy', 'Policy / Terms']
  ];

  const scrollToTop = () => {
    playSound.twinkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/80 pt-16 pb-8 text-slate-400 relative" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900/60">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => onNavigate('hero')}>
              <div className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-2 rounded-xl shadow-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-sans font-black text-lg tracking-tight text-white">Cường</span>
                <span className="font-mono text-[10px] font-bold text-indigo-400 block tracking-widest -mt-1 uppercase">VM</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              {isVi
                ? 'Portfolio cá nhân của Cường VM, Unity developer tập trung vào gameplay, mobile optimization, tools và khả năng join project nhanh.'
                : 'Personal portfolio of Cuong VM, a Unity developer focused on gameplay, mobile optimization, tools, and fast project onboarding.'}
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.url} className={`text-xs font-mono font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1.5 ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" /> {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">{isVi ? 'Danh Mục' : 'Menu'}</h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              {links.map(([id, label]) => (
                <button key={id} onClick={() => onNavigate(id)} className="text-left hover:text-white transition-colors cursor-pointer">
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">{isVi ? 'Nhận cập nhật' : 'Get Updates'}</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
              {isVi
                ? 'Để lại email nếu bạn muốn trao đổi project Unity hoặc cần mình gửi CV/portfolio chi tiết.'
                : 'Leave an email if you want to discuss a Unity project or receive a detailed CV/portfolio.'}
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder={isVi ? 'Email của bạn' : 'Your email'} className="bg-slate-900 border border-slate-800/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-indigo-500 outline-none w-full" />
              <button onClick={() => playSound.twinkle()} className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl transition-all cursor-pointer" aria-label="Subscribe">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-slate-500">
          <div>&copy; 2026 Cường VM Portfolio. {isVi ? 'Bảo lưu mọi quyền.' : 'All Rights Reserved.'}</div>
          <button onClick={scrollToTop} className="bg-slate-900 border border-slate-800 p-2 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1 cursor-pointer" id="back-to-top-btn">
            <ArrowUp className="w-3.5 h-3.5" /> {isVi ? 'Lên Đầu Trang' : 'Back To Top'}
          </button>
        </div>
      </div>
    </footer>
  );
}
