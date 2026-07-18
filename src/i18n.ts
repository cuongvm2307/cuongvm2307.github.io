import { Blog, Game, Milestone, TeamMember } from './types';
import { BLOGS_DATA, GAMES_DATA, MILESTONES_DATA, TEAM_DATA } from './data';

export type Language = 'vi' | 'en';

export const languageOptions: Array<{ value: Language; label: string }> = [
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'en', label: 'English' }
];

export const labels = {
  vi: {
    nav: {
      hero: 'Trang Chủ',
      projects: 'Dự Án',
      about: 'Giới Thiệu',
      blog: 'Ghi Chú',
      contact: 'Liên Hệ',
      demo: 'Xem Project',
      demoNow: 'Xem Project Ngay',
      language: 'Ngôn ngữ'
    },
    hero: {
      badge: 'Unity developer nhiều kinh nghiệm',
      titleA: 'Cường VM',
      titleB: 'Unity Developer',
      subtitle: 'Mình là Unity developer tập trung vào gameplay, mobile optimization, UI flow, tooling và kiến trúc code dễ mở rộng. Có thể join dự án nhanh, phối hợp tốt với team art/design/product và đưa prototype thành bản playable ổn định.',
      projects: 'Xem Project',
      about: 'Về Kinh Nghiệm',
      stats: ['Project đã tham gia', 'Năm kinh nghiệm', 'Mobile FPS target', 'Module tái sử dụng'],
      scroll: 'Cuộn Xuống'
    },
    projects: {
      eyebrow: 'Portfolio cá nhân',
      title: 'Một Vài Project Unity',
      intro: 'Các project dưới đây đại diện cho những mảng mình thường làm: gameplay framework, multiplayer prototype, casual liveops, UI flow, tooling và tối ưu mobile.',
      filters: {
        all: 'Tất cả',
        rpg: 'Gameplay',
        action: 'Realtime',
        cozy: 'Tools'
      }
    },
    card: {
      details: 'Chi Tiết',
      status: {
        Released: 'Đã hoàn thiện',
        Beta: 'Prototype',
        'In Development': 'Đang mở rộng'
      }
    }
  },
  en: {
    nav: {
      hero: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Notes',
      contact: 'Contact',
      demo: 'View Projects',
      demoNow: 'View Projects Now',
      language: 'Language'
    },
    hero: {
      badge: 'Experienced Unity developer',
      titleA: 'Cường VM',
      titleB: 'Unity Developer',
      subtitle: 'I am a Unity developer focused on gameplay, mobile optimization, UI flow, tooling, and scalable code architecture. I can join projects quickly, collaborate smoothly with art/design/product teams, and turn prototypes into stable playable builds.',
      projects: 'View Projects',
      about: 'About Experience',
      stats: ['Joined Projects', 'Years Experience', 'Mobile FPS Target', 'Reusable Modules'],
      scroll: 'Scroll Down'
    },
    projects: {
      eyebrow: 'Personal portfolio',
      title: 'Selected Unity Projects',
      intro: 'These projects represent the work I usually handle: gameplay frameworks, multiplayer prototypes, casual liveops, UI flow, tooling, and mobile optimization.',
      filters: {
        all: 'All',
        rpg: 'Gameplay',
        action: 'Realtime',
        cozy: 'Tools'
      }
    },
    card: {
      details: 'Details',
      status: {
        Released: 'Completed',
        Beta: 'Prototype',
        'In Development': 'In Progress'
      }
    }
  }
} as const;

const englishGames: Record<string, Partial<Game>> = {
  'mobile-rpg-framework': {
    title: 'Mobile RPG Combat Framework',
    genre: 'Unity / Action RPG / Mobile',
    description: 'A mobile RPG combat framework with combos, skill cooldowns, enemy AI, object pooling, and mid-range device optimization.',
    longDescription: 'A personal Unity project focused on core action RPG gameplay. Systems are split into input, animation state, hitbox, damage, VFX, pooling, and ScriptableObject-driven config so new content can be extended quickly.',
    releaseDate: '2025',
    downloads: 'Personal demo',
    features: [
      'Combat controller with combo chains, hit pause, knockback, and cancel windows.',
      'Enemy AI using a lightweight state machine that is easy to tune per enemy type.',
      'Object pooling for projectiles, VFX, damage text, and enemy spawning.',
      'Profiler-driven optimization for draw calls, GC allocation, and frame pacing.'
    ]
  },
  'multiplayer-prototype': {
    title: 'Realtime Multiplayer Prototype',
    genre: 'Unity / Multiplayer / Co-op',
    description: 'A realtime multiplayer prototype with lobby flow, room states, position sync, RPC events, and basic reconnect handling.',
    longDescription: 'A Unity co-op prototype focused on network gameplay architecture: light local prediction, remote interpolation, event-driven combat, and a practical lobby/room UI for testing.',
    releaseDate: '2024',
    downloads: 'Internal test',
    features: [
      'Room and lobby lifecycle with ready states, start match, and leave room.',
      'Network transform interpolation for smoother remote movement.',
      'RPC events for skills, hit confirmation, health sync, and match results.',
      'Service-layer code organization for swapping Photon, Mirror, or Netcode more easily.'
    ]
  },
  'casual-liveops-toolkit': {
    title: 'Casual Game LiveOps Toolkit',
    genre: 'Unity / Casual / Tools',
    description: 'A reusable casual-game toolkit with daily rewards, shop config, remote balancing, analytics events, and popup flow management.',
    longDescription: 'A personal toolkit for casual/mobile projects, designed for fast implementation and maintainability. UI modules, economy config, daily rewards, and analytics wrappers are separated for reuse across prototypes.',
    releaseDate: '2023',
    downloads: 'Reusable toolkit',
    features: [
      'Daily rewards, in-game shop, currency wallet, and offer popups.',
      'ScriptableObject/JSON config so designers can tune values quickly.',
      'Analytics wrapper for tutorial, level, purchase intent, and retention events.',
      'UI flow stack to prevent popup conflicts and simplify localization integration.'
    ]
  }
};

const englishBlogs: Record<string, Partial<Blog>> = {
  'blog-unity-optimization': {
    title: 'Unity mobile optimization starts with the profiler, not a feeling',
    summary: 'Practical notes on GC allocation, batching, texture memory, and stable FPS on mid-range devices.',
    content: 'When optimizing Unity mobile games, I usually start with the Profiler and Frame Debugger before changing code. Common issues are Update allocations, repeated instantiate/destroy calls, oversized textures, canvas rebuilds, and expensive shaders. The useful loop is measure, isolate, fix small, then measure again.',
    category: 'Unity Notes',
    readTime: '4 min read',
    tags: ['Unity', 'Optimization', 'Mobile', 'Profiler']
  },
  'blog-game-architecture': {
    title: 'Modular gameplay helps prototypes grow without becoming messy',
    summary: 'How I organize Unity code with services, state machines, ScriptableObject config, and a small event layer.',
    content: 'Fast prototypes do not have to put every system into one MonoBehaviour. I usually split input, combat, UI, economy, and save data into small modules, use events only where they reduce coupling, and keep designer-facing config in ScriptableObjects or JSON.',
    category: 'Development',
    readTime: '5 min read',
    tags: ['Architecture', 'Gameplay', 'C#', 'Tools']
  },
  'blog-team-workflow': {
    title: 'Working with art and design teams in Unity projects',
    summary: 'A lightweight workflow that helps developers, artists, and designers iterate faster with fewer asset conflicts.',
    content: 'When joining a team, I care about clear pipelines: prefab conventions, naming, scene ownership, branch rules, and build checklists. When asset handoff is clear, gameplay iteration becomes much faster.',
    category: 'Workflow',
    readTime: '3 min read',
    tags: ['Teamwork', 'Pipeline', 'Unity', 'Production']
  }
};

const englishMilestones: Record<string, Partial<Milestone>> = {
  m1: { title: 'Started with Unity and C#', description: 'Built a foundation in gameplay programming, UI, animation controllers, physics, and mobile builds.' },
  m2: { title: 'Joined mobile game projects', description: 'Worked with art/design teams to implement gameplay loops, economy, ads/IAP, and Android optimization.' },
  m3: { title: 'Focused on architecture and tools', description: 'Built reusable modules, editor tooling, config pipelines, and fast prototype workflows for multiple genres.' },
  m4: { title: 'Ready to join Unity projects quickly', description: 'Available for mobile games, casual games, RPG systems, multiplayer prototypes, or internal tooling.' }
};

const englishTeam: Record<string, Partial<TeamMember>> = {
  t1: { name: 'Cường VM', role: 'Senior Unity Developer', bio: 'Experienced Unity developer strong in gameplay, mobile optimization, UI flow, tools, and production teamwork.' },
  t2: { name: 'Gameplay', role: 'Combat / Input / AI', bio: 'Gameplay loops, character controllers, enemy AI, skill systems, and combat feedback.' },
  t3: { name: 'Mobile', role: 'Performance / Build', bio: 'FPS, memory, loading, Addressables, Android/iOS build settings, and common SDK integrations.' },
  t4: { name: 'Tools', role: 'Editor / Pipeline', bio: 'Editor tools, config workflows, debug panels, and reusable modules that speed up production.' }
};

export function getGames(language: Language): Game[] {
  if (language === 'vi') return GAMES_DATA;
  return GAMES_DATA.map((game) => ({ ...game, ...englishGames[game.id] }));
}

export function getBlogs(language: Language): Blog[] {
  if (language === 'vi') return BLOGS_DATA;
  return BLOGS_DATA.map((blog) => ({ ...blog, ...englishBlogs[blog.id] }));
}

export function getMilestones(language: Language): Milestone[] {
  if (language === 'vi') return MILESTONES_DATA;
  return MILESTONES_DATA.map((item) => ({ ...item, ...englishMilestones[item.id] }));
}

export function getTeam(language: Language): TeamMember[] {
  if (language === 'vi') return TEAM_DATA;
  return TEAM_DATA.map((item) => ({ ...item, ...englishTeam[item.id] }));
}
