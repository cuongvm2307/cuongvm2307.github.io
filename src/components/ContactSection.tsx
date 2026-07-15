import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { GAMES_DATA } from '../data';
import { playSound } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    interest: 'than-kiem-hanhi',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSound.twinkle();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound.hit();
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      interest: 'than-kiem-hanhi',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
            HỢP TÁC & PHẢN HỒI
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3.5 leading-relaxed font-normal">
            Bạn có câu hỏi, ý tưởng hợp tác phát hành, hoặc đơn giản muốn gửi phản hồi cho HanHi Games? Đừng ngần ngại gửi tin nhắn ngay cho chúng tôi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info Column (2/5) */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-white font-sans font-bold text-lg">
                Thông Tin Văn Phòng
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                HanHi Games luôn chào đón các nhà thiết kế, nhà lập trình và đối tác tới trao đổi và chia sẻ đam mê bất cứ lúc nào.
              </p>

              <div className="space-y-4">
                {/* Mail */}
                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">EMAIL LIÊN HỆ</span>
                    <a href="mailto:contact@hanhi.games" className="text-slate-300 text-xs hover:text-white transition-colors">
                      contact@hanhi.games
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">ĐƯỜNG DÂY NÓNG</span>
                    <span className="text-slate-300 text-xs font-mono">
                      +84 (28) 3888 9999
                    </span>
                  </div>
                </div>

                {/* Map location */}
                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">TRỤ SỞ CHÍNH</span>
                    <span className="text-slate-300 text-xs leading-relaxed block font-normal">
                      Tầng 12, Tòa nhà Bitexco Financial Tower, Quận 1, TP. Hồ Chí Minh, Việt Nam
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle branding statement */}
            <div className="bg-slate-900/40 border border-slate-900 p-5 rounded-2xl">
              <span className="text-[10px] font-mono text-indigo-400 block mb-1">HANHI SYNDICATE</span>
              <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                &ldquo;Trò chơi điện tử tuyệt vời được dựng lên bởi niềm đam mê mãnh liệt, tính kỷ luật tối cao và văn hóa gắn kết chặt chẽ.&rdquo;
              </p>
            </div>
          </div>

          {/* Form Column (3/5) */}
          <div className="lg:col-span-3 bg-slate-900 border border-slate-850 p-6 sm:p-8 rounded-3xl shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      Họ và Tên <span className="text-indigo-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      Địa chỉ Email <span className="text-indigo-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="nva@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Subject */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      Tiêu đề tin nhắn
                    </label>
                    <input 
                      type="text" 
                      placeholder="Hợp tác truyền thông / Tuyển dụng..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Game Interest Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      Dự án quan tâm
                    </label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-300 outline-none transition-colors cursor-pointer"
                    >
                      {GAMES_DATA.map((game) => (
                        <option key={game.id} value={game.id}>
                          {game.title.split(':')[0]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                    Lời nhắn gửi <span className="text-indigo-400">*</span>
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Viết nội dung tin nhắn của bạn tại đây..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-indigo-800 disabled:to-purple-850 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg shadow-indigo-950/40 hover:shadow-indigo-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="send-message-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></div>
                      <span>Đang Gửi Đi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Thông Điệp Ngay</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center" id="contact-success">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h4 className="text-white font-sans font-bold text-xl mb-3">
                  Gửi Thành Công!
                </h4>

                <p className="text-slate-350 text-xs sm:text-sm max-w-sm leading-relaxed mb-8">
                  Cảm ơn <strong className="text-white">{formData.name}</strong>, thông điệp của bạn đã được chuyển thẳng tới đội ngũ quản lý của HanHi Games. Chúng tôi sẽ trả lời bạn qua hòm thư <strong className="text-indigo-300">{formData.email}</strong> sớm nhất có thể.
                </p>

                <button
                  onClick={resetForm}
                  className="bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all cursor-pointer"
                  id="reset-form-btn"
                >
                  Gửi Tin Nhắn Mới
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
