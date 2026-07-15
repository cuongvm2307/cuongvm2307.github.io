import React from 'react';
import { Award, Target, Flame, ChevronRight, Heart, Star } from 'lucide-react';
import { MILESTONES_DATA, TEAM_DATA } from '../data';

export default function AboutSection() {
  const coreValues = [
    {
      icon: Flame,
      title: 'Đam Mê Bất Tận',
      desc: 'Chúng tôi coi trò chơi không chỉ là giải trí, mà là một tác phẩm nghệ thuật kỹ thuật số có khả năng gắn kết hàng triệu tâm hồn.',
      color: 'text-red-500 bg-red-500/10 border-red-500/20'
    },
    {
      icon: Target,
      title: 'Sáng Tạo Đột Phá',
      desc: 'Không đi theo lối mòn. HanHi Games luôn thử nghiệm những cơ chế gameplay độc đáo nhất và công nghệ đồ họa tiên tiến nhất.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Award,
      title: 'Vươn Tầm Quốc Tế',
      desc: 'Khao khát mãnh liệt mang những câu chuyện, bối cảnh đậm đà bản sắc Việt Nam giới thiệu rộng rãi tới bạn bè năm châu.',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Visual background decorations */}
      <div className="absolute top-1/3 right-0 w-[30vw] h-[30vh] rounded-full bg-purple-600/5 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[25vw] h-[25vh] rounded-full bg-indigo-600/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
            VỀ CHÚNG TÔI
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
            HANHI GAMES STUDIO
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Chúng tôi là ngôi nhà tụ hội của những khối óc nghệ thuật lập dị và những kỹ sư phần mềm tài ba, cùng chia sẻ ước mơ chung: Tạo dựng những di sản trò chơi truyền kỳ.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="core-values-grid">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg shadow-black/40"
              >
                <div>
                  <div className={`p-3 rounded-xl border w-fit mb-5 ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-sans font-bold text-lg mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MILESTONE TIMELINE */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 sm:p-10 mb-24" id="milestones-panel">
          <h3 className="text-center font-sans font-bold text-xl sm:text-2xl text-white mb-12">
            Chặng Đường Phát Triển
          </h3>

          <div className="relative border-l border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10">
            {MILESTONES_DATA.map((stone) => (
              <div key={stone.id} className="relative group">
                {/* Year tag */}
                <span className="absolute -left-[30px] sm:-left-[46px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border border-indigo-500/60 flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs text-indigo-400 shadow-md group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 transition-all">
                  ●
                </span>

                <div className="bg-slate-900/60 border border-slate-850 p-5 rounded-2xl group-hover:border-indigo-500/20 transition-all shadow-md">
                  <span className="font-mono font-black text-indigo-400 text-base block mb-1">
                    NĂM {stone.year}
                  </span>
                  <h4 className="text-white font-sans font-bold text-sm sm:text-base mb-1.5">
                    {stone.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {stone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM MEMEBERS */}
        <div id="team-members">
          <h3 className="text-center font-sans font-bold text-xl sm:text-2xl text-white mb-12">
            Đội Ngũ Sáng Lập
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_DATA.map((member) => (
              <div 
                key={member.id} 
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-indigo-500/20 hover:-translate-y-1"
              >
                {/* Avatar container */}
                <div className="aspect-square relative overflow-hidden bg-slate-950">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Profile detail */}
                <div className="p-4">
                  <h4 className="text-white font-sans font-bold text-base leading-tight">
                    {member.name}
                  </h4>
                  <span className="text-indigo-400 font-mono text-[10px] font-bold block uppercase tracking-wider mt-1">
                    {member.role}
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed mt-2.5 line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
