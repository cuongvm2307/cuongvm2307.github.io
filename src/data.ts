import { Blog, Game, Milestone, TeamMember } from './types';

export const HERO_BANNER = '/src/assets/images/games_studio_hero_1784128744057.jpg';

export const GAMES_DATA: Game[] = [
  {
    id: 'mobile-rpg-framework',
    title: 'Mobile RPG Combat Framework',
    genre: 'Unity / Action RPG / Mobile',
    cover: '/src/assets/images/shadow_legend_cover_1784128760954.jpg',
    description: 'Framework chiến đấu cho mobile RPG gồm combo, skill cooldown, enemy AI, object pooling và tối ưu hiệu năng cho thiết bị tầm trung.',
    longDescription: 'Một project cá nhân tập trung vào phần lõi gameplay cho game nhập vai hành động trên Unity. Hệ thống được tách module rõ ràng cho input, animation state, hitbox, damage, VFX, pooling và config bằng ScriptableObject để dễ mở rộng nội dung.',
    releaseDate: '2025',
    platforms: ['Mobile', 'PC'],
    rating: 4.9,
    status: 'Released',
    downloads: 'Personal demo',
    demoType: 'combat',
    features: [
      'Combat controller có combo chain, hit pause, knockback và cancel window.',
      'Enemy AI dùng state machine đơn giản, dễ tinh chỉnh theo từng loại quái.',
      'Object pooling cho projectile, VFX, damage text và enemy spawn.',
      'Profiler-driven optimization cho draw call, GC allocation và frame pacing.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Unity 2021 LTS | Android 8+ | 3 GB RAM',
      recommended: 'Unity 2022 LTS | Android 10+ | 4 GB RAM'
    }
  },
  {
    id: 'multiplayer-prototype',
    title: 'Realtime Multiplayer Prototype',
    genre: 'Unity / Multiplayer / Co-op',
    cover: '/src/assets/images/cyber_nexus_cover_1784128777812.jpg',
    description: 'Prototype multiplayer thời gian thực với lobby, room flow, sync vị trí, RPC event và xử lý các tình huống reconnect cơ bản.',
    longDescription: 'Project mô phỏng luồng chơi co-op nhỏ trong Unity, tập trung vào kiến trúc network gameplay: phân tách local prediction nhẹ, remote interpolation, event-driven combat và màn hình lobby/room đủ dùng cho testing.',
    releaseDate: '2024',
    platforms: ['PC', 'Mobile'],
    rating: 4.7,
    status: 'Beta',
    downloads: 'Internal test',
    demoType: 'hacking',
    features: [
      'Room/lobby lifecycle có ready state, start match và leave room.',
      'Network transform interpolation giúp chuyển động remote mượt hơn.',
      'RPC event cho skill, hit confirm, health sync và match result.',
      'Code tổ chức theo service layer để dễ thay backend như Photon, Mirror hoặc Netcode.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Unity 2021 LTS | Photon/Mirror ready | 60 FPS target',
      recommended: 'Unity 2022 LTS | Dedicated test scene | Android/iOS build pipeline'
    }
  },
  {
    id: 'casual-liveops-toolkit',
    title: 'Casual Game LiveOps Toolkit',
    genre: 'Unity / Casual / Tools',
    cover: '/src/assets/images/cozy_valley_cover_1784128793300.jpg',
    description: 'Bộ công cụ cho casual game gồm daily reward, shop config, remote balancing, analytics event và flow popup có thể tái sử dụng.',
    longDescription: 'Một toolkit cá nhân cho các dự án casual/mobile, ưu tiên tốc độ triển khai và dễ bảo trì. Các module UI, economy config, daily reward và analytics wrapper được tách rời để dùng lại qua nhiều prototype.',
    releaseDate: '2023',
    platforms: ['Mobile'],
    rating: 4.8,
    status: 'In Development',
    downloads: 'Reusable toolkit',
    demoType: 'farming',
    features: [
      'Daily reward, in-game shop, currency wallet và offer popup.',
      'Config bằng ScriptableObject/JSON giúp game designer chỉnh nhanh.',
      'Analytics wrapper cho tutorial, level, purchase intent và retention events.',
      'UI flow stack hạn chế popup chồng chéo và dễ tích hợp localization.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Unity 2021 LTS | Addressables optional | Mobile UI safe area',
      recommended: 'Unity 2022 LTS | Remote config | Firebase/GameAnalytics integration'
    }
  }
];

export const BLOGS_DATA: Blog[] = [
  {
    id: 'blog-unity-optimization',
    title: 'Tối ưu Unity mobile: bắt đầu từ profiler, không bắt đầu từ cảm giác',
    summary: 'Một vài ghi chú thực tế về GC allocation, batching, texture memory và cách giữ FPS ổn định trên máy tầm trung.',
    content: 'Khi tối ưu Unity mobile, mình thường bắt đầu bằng Profiler và Frame Debugger trước khi sửa code. Những điểm hay gặp là allocation trong Update, instantiate/destroy liên tục, texture quá lớn, canvas rebuild và shader quá đắt. Cách làm hiệu quả là đo, khoanh vùng, sửa nhỏ, rồi đo lại.',
    category: 'Unity Notes',
    author: {
      name: 'Cường VM',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      role: 'Unity Developer'
    },
    date: '2026',
    readTime: '4 phút đọc',
    cover: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    likes: 128,
    commentsCount: 12,
    tags: ['Unity', 'Optimization', 'Mobile', 'Profiler']
  },
  {
    id: 'blog-game-architecture',
    title: 'Tách gameplay thành module để prototype nhanh nhưng vẫn dễ nâng cấp',
    summary: 'Kinh nghiệm tổ chức code Unity bằng service, state machine, ScriptableObject config và event bus vừa đủ.',
    content: 'Prototype nhanh không có nghĩa là viết tạm mọi thứ vào một MonoBehaviour. Mình thường tách input, combat, UI, economy và save data thành các module nhỏ, dùng event vừa đủ để giảm coupling, còn config thì để designer chỉnh qua ScriptableObject hoặc JSON.',
    category: 'Development',
    author: {
      name: 'Cường VM',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      role: 'Unity Developer'
    },
    date: '2025',
    readTime: '5 phút đọc',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    likes: 96,
    commentsCount: 8,
    tags: ['Architecture', 'Gameplay', 'C#', 'Tools']
  },
  {
    id: 'blog-team-workflow',
    title: 'Làm việc với team art/design trong dự án Unity',
    summary: 'Một workflow nhẹ giúp dev, artist và designer cùng thử nghiệm nhanh mà ít va chạm asset.',
    content: 'Điều mình ưu tiên khi join team là tạo pipeline rõ: prefab convention, naming, scene ownership, branch rule và checklist build. Khi mọi người có cách trao đổi asset rõ ràng, tốc độ iterate gameplay tăng lên rất nhiều.',
    category: 'Workflow',
    author: {
      name: 'Cường VM',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      role: 'Unity Developer'
    },
    date: '2024',
    readTime: '3 phút đọc',
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    likes: 74,
    commentsCount: 5,
    tags: ['Teamwork', 'Pipeline', 'Unity', 'Production']
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'm1',
    year: '2018',
    title: 'Bắt đầu với Unity và C#',
    description: 'Xây nền tảng gameplay programming, UI, animation controller, physics và build mobile.'
  },
  {
    id: 'm2',
    year: '2020',
    title: 'Tham gia các dự án mobile game',
    description: 'Làm việc với team art/design, triển khai gameplay loop, economy, ads/IAP và tối ưu thiết bị Android.'
  },
  {
    id: 'm3',
    year: '2022',
    title: 'Tập trung architecture và tools',
    description: 'Xây module tái sử dụng, editor tooling, config pipeline và quy trình prototype nhanh cho nhiều thể loại.'
  },
  {
    id: 'm4',
    year: '2024+',
    title: 'Unity developer có thể join project nhanh',
    description: 'Sẵn sàng tham gia dự án game mobile, casual, RPG, multiplayer prototype hoặc tooling nội bộ.'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 't1',
    name: 'Cường VM',
    role: 'Senior Unity Developer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    bio: 'Unity developer nhiều kinh nghiệm, mạnh về gameplay, mobile optimization, UI flow, tools và làm việc cùng team production.',
    socials: { github: 'cuongvm2307', linkedin: 'cuong-vm' }
  },
  {
    id: 't2',
    name: 'Gameplay',
    role: 'Combat / Input / AI',
    avatar: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=150',
    bio: 'Thiết kế và triển khai gameplay loop, character controller, enemy AI, skill system và feedback chiến đấu.',
    socials: {}
  },
  {
    id: 't3',
    name: 'Mobile',
    role: 'Performance / Build',
    avatar: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=150',
    bio: 'Tối ưu FPS, memory, loading, addressables, Android/iOS build settings và các SDK phổ biến.',
    socials: {}
  },
  {
    id: 't4',
    name: 'Tools',
    role: 'Editor / Pipeline',
    avatar: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=150',
    bio: 'Xây editor tools, config workflow, debug panel và module dùng lại để tăng tốc phát triển dự án.',
    socials: {}
  }
];
