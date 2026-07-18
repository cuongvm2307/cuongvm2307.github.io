import React, { useState } from 'react';
import { CheckCircle, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Language } from '../i18n';
import { Game } from '../types';
import { playSound } from '../utils/audio';

interface ContactSectionProps {
  language: Language;
  games: Game[];
}

export default function ContactSection({ language, games }: ContactSectionProps) {
  const isVi = language === 'vi';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    interest: games[0]?.id ?? '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = {
    eyebrow: isVi ? 'Hợp tác & Join Project' : 'Collaboration & Project Work',
    title: isVi ? 'Liên Hệ Cường VM' : 'Contact Cuong VM',
    intro: isVi
      ? 'Bạn cần Unity developer để join team, làm prototype, tối ưu mobile hoặc xây module gameplay? Gửi mình vài thông tin về dự án nhé.'
      : 'Need a Unity developer to join your team, build a prototype, optimize mobile performance, or implement gameplay modules? Send me a short project note.',
    infoTitle: isVi ? 'Thông Tin Làm Việc' : 'Work Information',
    infoCopy: isVi
      ? 'Mình có thể tham gia theo dạng freelance, remote, part-time hoặc join theo giai đoạn prototype/production tùy nhu cầu dự án.'
      : 'I can work freelance, remote, part-time, or join specific prototype/production phases depending on the project.',
    email: isVi ? 'Email liên hệ' : 'Contact email',
    phone: isVi ? 'Trao đổi nhanh' : 'Quick chat',
    linkedin: isVi ? 'Quá trình làm việc' : 'Work history',
    location: isVi ? 'Khu vực' : 'Location',
    quote: isVi
      ? 'Code gameplay tốt không chỉ chạy được, mà còn phải dễ debug, dễ tune và đủ sạch để team tiếp tục phát triển.'
      : 'Good gameplay code should not only work; it should be debuggable, tunable, and clean enough for the team to keep building.',
    name: isVi ? 'Họ và tên' : 'Full name',
    emailAddress: isVi ? 'Địa chỉ email' : 'Email address',
    subject: isVi ? 'Tiêu đề' : 'Subject',
    interest: isVi ? 'Project quan tâm' : 'Project interest',
    message: isVi ? 'Nội dung' : 'Message',
    namePlaceholder: isVi ? 'Nguyễn Văn A' : 'Alex Nguyen',
    subjectPlaceholder: isVi ? 'Cần Unity dev join project...' : 'Need a Unity dev for a project...',
    messagePlaceholder: isVi ? 'Mô tả ngắn project, thời gian, vai trò cần hỗ trợ...' : 'Briefly describe the project, timeline, and role needed...',
    sending: isVi ? 'Đang gửi...' : 'Sending...',
    send: isVi ? 'Gửi Liên Hệ' : 'Send Message',
    success: isVi ? 'Đã Gửi Thành Công!' : 'Message Sent!',
    thanks: isVi ? 'Cảm ơn' : 'Thank you',
    successBody: isVi ? 'mình đã nhận được thông tin và sẽ phản hồi qua email' : 'I received your message and will reply via',
    reset: isVi ? 'Gửi Tin Nhắn Mới' : 'Send Another Message'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSound.twinkle();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound.hit();
    }, 900);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', interest: games[0]?.id ?? '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">{t.eyebrow}</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">{t.title}</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3.5 leading-relaxed font-normal">{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-white font-sans font-bold text-lg">{t.infoTitle}</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">{t.infoCopy}</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0"><Mail className="w-4 h-4" /></div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">{t.email}</span>
                    <a href="mailto:cuongvm2307@gmail.com" className="text-slate-300 text-xs hover:text-white transition-colors">cuongvm2307@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0"><Phone className="w-4 h-4" /></div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">{t.phone}</span>
                    <span className="text-slate-300 text-xs font-mono">Available on request</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0"><Linkedin className="w-4 h-4" /></div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">{t.linkedin}</span>
                    <a href="https://www.linkedin.com/in/cuong-vu-532621119/" className="text-slate-300 text-xs hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      linkedin.com/in/cuong-vu-532621119
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0"><MapPin className="w-4 h-4" /></div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">{t.location}</span>
                    <span className="text-slate-300 text-xs leading-relaxed block font-normal">Vietnam / Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-900 p-5 rounded-2xl">
              <span className="text-[10px] font-mono text-indigo-400 block mb-1">CUONG VM PORTFOLIO</span>
              <p className="text-slate-500 text-[11px] leading-relaxed font-normal">&ldquo;{t.quote}&rdquo;</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">{t.name} <span className="text-indigo-400">*</span></label>
                    <input type="text" required placeholder={t.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">{t.emailAddress} <span className="text-indigo-400">*</span></label>
                    <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">{t.subject}</label>
                    <input type="text" placeholder={t.subjectPlaceholder} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">{t.interest}</label>
                    <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-300 outline-none transition-colors cursor-pointer">
                      {games.map((game) => (
                        <option key={game.id} value={game.id}>{game.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">{t.message} <span className="text-indigo-400">*</span></label>
                  <textarea required rows={4} placeholder={t.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors resize-none"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-indigo-800 disabled:to-purple-800 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg shadow-indigo-950/40 hover:shadow-indigo-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer" id="send-message-btn">
                  {isSubmitting ? <><div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></div><span>{t.sending}</span></> : <><Send className="w-4 h-4" /><span>{t.send}</span></>}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center" id="contact-success">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 animate-bounce"><CheckCircle className="w-8 h-8" /></div>
                <h4 className="text-white font-sans font-bold text-xl mb-3">{t.success}</h4>
                <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed mb-8">
                  {t.thanks} <strong className="text-white">{formData.name}</strong>, {t.successBody} <strong className="text-indigo-300">{formData.email}</strong>.
                </p>
                <button onClick={resetForm} className="bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all cursor-pointer" id="reset-form-btn">{t.reset}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
