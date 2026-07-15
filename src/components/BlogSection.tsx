import React, { useState } from 'react';
import { Blog } from '../types';
import { BLOGS_DATA } from '../data';
import { 
  Calendar, Clock, Heart, MessageSquare, ArrowRight, 
  X, Send, User, ChevronRight, Tag
} from 'lucide-react';
import { playSound } from '../utils/audio';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  // States to persist likes and comments locally in memory/session for rich interaction
  const [blogLikes, setBlogLikes] = useState<Record<string, number>>(
    BLOGS_DATA.reduce((acc, b) => ({ ...acc, [b.id]: b.likes }), {})
  );
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  const [blogComments, setBlogComments] = useState<Record<string, Array<{ author: string; text: string; date: string }>>>(
    BLOGS_DATA.reduce((acc, b) => ({ 
      ...acc, 
      [b.id]: [
        { author: 'Lâm Tuấn', text: 'Bài viết rất hữu ích, hóng bản đồ họa thực tế của Thần Kiếm!', date: '11/07/2026' },
        { author: 'Kim Chi', text: 'Phong cách nghệ thuật của Flora Story đẹp quá xá, mong game ra mắt sớm.', date: '06/07/2026' }
      ] 
    }), {})
  );

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  const categories = ['Tất cả', 'Cập nhật Game', 'Hậu trường Dev', 'Sự kiện'];

  const filteredBlogs = selectedCategory === 'Tất cả'
    ? BLOGS_DATA
    : BLOGS_DATA.filter(b => b.category === selectedCategory);

  const handleLike = (blogId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if (likedList[blogId]) {
      // Dislike
      playSound.fail();
      setBlogLikes(prev => ({ ...prev, [blogId]: prev[blogId] - 1 }));
      setLikedList(prev => ({ ...prev, [blogId]: false }));
    } else {
      // Like
      playSound.hit();
      setBlogLikes(prev => ({ ...prev, [blogId]: prev[blogId] + 1 }));
      setLikedList(prev => ({ ...prev, [blogId]: true }));
    }
  };

  const handleAddComment = (e: React.FormEvent, blogId: string) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    playSound.twinkle();
    const newComment = {
      author: commentName.trim(),
      text: commentText.trim(),
      date: 'Hôm nay'
    };

    setBlogComments(prev => ({
      ...prev,
      [blogId]: [newComment, ...(prev[blogId] || [])]
    }));

    setCommentName('');
    setCommentText('');
  };

  return (
    <section id="blog" className="py-24 bg-slate-900 border-t border-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
              TRANG TIN TỨC
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
              TIN MỚI & BLOG DEV
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl font-normal leading-relaxed">
              Cập nhật những công bố chính thức, tiến trình phát triển dự án và chia sẻ công nghệ chuyên sâu từ hậu trường làm game của đội ngũ HanHi Games.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5" id="blog-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  playSound.twinkle();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-950/20'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blogs-grid">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => {
                setActiveBlog(blog);
                playSound.twinkle();
              }}
              className="group bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Blog Cover */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src={blog.cover} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-indigo-600/90 border border-indigo-500/20 backdrop-blur-md text-white text-[9px] font-mono font-bold px-2 py-1 rounded">
                    {blog.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Blog body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta date/read */}
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-sans font-bold text-base group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {blog.summary}
                  </p>
                </div>

                {/* Footer and metrics */}
                <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <img 
                      src={blog.author.avatar} 
                      alt={blog.author.name} 
                      className="w-6 h-6 rounded-full border border-slate-800"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] font-medium text-slate-300 truncate max-w-[100px]">{blog.author.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Likes tracker */}
                    <button 
                      onClick={(e) => handleLike(blog.id, e)}
                      className={`flex items-center gap-1 text-[11px] font-mono transition-colors cursor-pointer ${
                        likedList[blog.id] ? 'text-red-500' : 'text-slate-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${likedList[blog.id] ? 'fill-red-500' : ''}`} />
                      <span>{blogLikes[blog.id]}</span>
                    </button>

                    {/* Comments count */}
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{blogComments[blog.id]?.length || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULL BLOG READER DIALOG/MODAL */}
        {activeBlog && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fade-in"
            id="blog-reader-overlay"
          >
            <div 
              className="bg-slate-900 border border-slate-850 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-8 animate-scale-up"
              id="blog-reader-modal"
            >
              {/* Cover Banner */}
              <div className="relative h-48 sm:h-64 bg-slate-950">
                <img 
                  src={activeBlog.cover} 
                  alt={activeBlog.title} 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>

                <button
                  onClick={() => setActiveBlog(null)}
                  className="absolute top-4 right-4 bg-slate-950/85 hover:bg-slate-850 text-slate-400 hover:text-white p-2 rounded-full border border-slate-800 backdrop-blur"
                  id="close-reader-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reader Content Area */}
              <div className="p-6 sm:p-10 max-h-[65vh] overflow-y-auto" id="reader-scrollable-content">
                {/* Author Profile Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={activeBlog.author.avatar} 
                      alt={activeBlog.author.name} 
                      className="w-10 h-10 rounded-full border border-indigo-500/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">{activeBlog.author.name}</div>
                      <div className="text-[10px] text-indigo-400 font-mono tracking-wider uppercase mt-0.5">{activeBlog.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-slate-500" /> {activeBlog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-500" /> {activeBlog.readTime}
                    </div>
                  </div>
                </div>

                {/* Main Article Title */}
                <span className="text-[10px] font-mono text-indigo-400 font-bold tracking-widest uppercase mb-1.5 block">
                  {activeBlog.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-sans font-black text-white mb-6 leading-tight">
                  {activeBlog.title}
                </h2>

                {/* Sub-content wrapper with structured styles */}
                <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line space-y-4">
                  {activeBlog.content}
                </div>

                {/* Tag badges */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-1.5">
                  <Tag className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                  {activeBlog.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-400 px-2.5 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* LIKE TRIGGER */}
                <div className="bg-slate-950/80 border border-slate-850 p-4 rounded-2xl flex items-center justify-between mt-8">
                  <span className="text-xs text-slate-400">Thích bài viết này để khích lệ tác giả?</span>
                  <button
                    onClick={() => handleLike(activeBlog.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono rounded-xl border cursor-pointer transition-all ${
                      likedList[activeBlog.id]
                        ? 'bg-red-500/15 border-red-500/30 text-red-500 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-red-500 hover:border-slate-700'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedList[activeBlog.id] ? 'fill-red-500' : ''}`} />
                    Yêu Thích ({blogLikes[activeBlog.id]})
                  </button>
                </div>

                {/* COMMENTS MODULE */}
                <div className="mt-10 pt-10 border-t border-slate-800">
                  <h3 className="text-white font-sans font-bold text-base mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-400" /> Ý Kiến Người Đọc ({blogComments[activeBlog.id]?.length || 0})
                  </h3>

                  {/* Comment input form */}
                  <form onSubmit={(e) => handleAddComment(e, activeBlog.id)} className="space-y-3.5 mb-8 bg-slate-950/40 border border-slate-850 p-4 rounded-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div className="sm:col-span-1">
                        <input 
                          type="text" 
                          placeholder="Tên của bạn" 
                          required
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                        />
                      </div>
                      <div className="sm:col-span-3 flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Để lại bình luận của bạn tại đây..." 
                          required
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                        />
                        <button 
                          type="submit"
                          className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-xl transition-all flex items-center justify-center shrink-0 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Comments list */}
                  <div className="space-y-4 max-h-[30vh] overflow-y-auto pr-2" id="comments-list">
                    {(blogComments[activeBlog.id] || []).map((cmt, idx) => (
                      <div key={idx} className="bg-slate-950/50 p-4 rounded-xl border border-slate-900/60 flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs font-mono uppercase shrink-0 mt-0.5">
                          {cmt.author[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white text-xs font-bold">{cmt.author}</span>
                            <span className="text-[9px] font-mono text-slate-500">{cmt.date}</span>
                          </div>
                          <p className="text-slate-300 text-xs mt-1.5 leading-relaxed font-normal">
                            {cmt.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
