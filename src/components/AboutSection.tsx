import React from 'react';
import { Award, Flame, Target } from 'lucide-react';
import { getMilestones, getTeam, labels, Language } from '../i18n';

interface AboutSectionProps {
  language: Language;
}

export default function AboutSection({ language }: AboutSectionProps) {
  const isVi = language === 'vi';
  const milestones = getMilestones(language);
  const skills = getTeam(language);
  const content = {
    eyebrow: isVi ? 'Về Cường VM' : 'About Cuong VM',
    title: isVi ? 'Unity Developer Portfolio' : 'Unity Developer Portfolio',
    intro: isVi
      ? 'Mình tập trung xây gameplay chắc, code dễ bảo trì và pipeline giúp team làm nhanh hơn. Điểm mạnh là hiểu cả nhịp prototype lẫn yêu cầu production: tối ưu mobile, debug nhanh, phối hợp rõ với art/design và giữ build ổn định.'
      : 'I focus on solid gameplay, maintainable code, and pipelines that help teams move faster. My strengths cover both prototype speed and production needs: mobile optimization, fast debugging, clear collaboration with art/design, and stable builds.',
    values: isVi
      ? [
        ['Gameplay chắc tay', 'Ưu tiên cảm giác điều khiển, feedback, state rõ ràng và gameplay loop có thể mở rộng.'],
        ['Tối ưu thực tế', 'Dùng Profiler, Frame Debugger và build test để xử lý FPS, memory, GC và loading.'],
        ['Join team nhanh', 'Tôn trọng convention của dự án, giao tiếp rõ, làm việc tốt với designer, artist và backend.']
      ]
      : [
        ['Reliable gameplay', 'I care about control feel, feedback, clear states, and gameplay loops that can scale.'],
        ['Practical optimization', 'I use Profiler, Frame Debugger, and build testing to improve FPS, memory, GC, and loading.'],
        ['Fast team onboarding', 'I respect project conventions, communicate clearly, and work well with designers, artists, and backend teams.']
      ],
    timeline: isVi ? 'Hành Trình Kinh Nghiệm' : 'Experience Timeline',
    skills: isVi ? 'Mảng Có Thể Đảm Nhận' : 'Areas I Can Handle',
    year: isVi ? 'Năm' : 'Year'
  };

  const icons = [Flame, Target, Award];
  const colors = [
    'text-red-500 bg-red-500/10 border-red-500/20',
    'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    'text-amber-400 bg-amber-500/10 border-amber-500/20'
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/3 right-0 w-[30vw] h-[30vh] rounded-full bg-purple-600/5 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[25vw] h-[25vh] rounded-full bg-indigo-600/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
            {content.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            {content.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="core-values-grid">
          {content.values.map(([title, desc], idx) => {
            const Icon = icons[idx];
            return (
              <div key={title} className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg shadow-black/40">
                <div className={`p-3 rounded-xl border w-fit mb-5 ${colors[idx]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-sans font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 sm:p-10 mb-24" id="milestones-panel">
          <h3 className="text-center font-sans font-bold text-xl sm:text-2xl text-white mb-12">
            {content.timeline}
          </h3>

          <div className="relative border-l border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10">
            {milestones.map((stone) => (
              <div key={stone.id} className="relative group">
                <span className="absolute -left-[30px] sm:-left-[46px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border border-indigo-500/60 flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs text-indigo-400 shadow-md group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 transition-all">
                  •
                </span>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl group-hover:border-indigo-500/20 transition-all shadow-md">
                  <span className="font-mono font-black text-indigo-400 text-base block mb-1">
                    {content.year} {stone.year}
                  </span>
                  <h4 className="text-white font-sans font-bold text-sm sm:text-base mb-1.5">{stone.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{stone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="team-members">
          <h3 className="text-center font-sans font-bold text-xl sm:text-2xl text-white mb-12">
            {content.skills}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((member) => (
              <div key={member.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-indigo-500/20 hover:-translate-y-1">
                <div className="aspect-square relative overflow-hidden bg-slate-950">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-sans font-bold text-base leading-tight">{member.name}</h4>
                  <span className="text-indigo-400 font-mono text-[10px] font-bold block uppercase tracking-wider mt-1">{member.role}</span>
                  <p className="text-slate-400 text-[11px] leading-relaxed mt-2.5 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
