import { Game, Blog, Milestone, TeamMember } from './types';

export const HERO_BANNER = '/src/assets/images/games_studio_hero_1784128744057.jpg';

export const GAMES_DATA: Game[] = [
  {
    id: 'than-kiem-hanhi',
    title: 'Thần Kiếm HanHi: Minh Chủ Trỗi Dậy',
    genre: 'Action RPG / Nhập Vai Hành Động',
    cover: '/src/assets/images/shadow_legend_cover_1784128760954.jpg',
    description: 'Một kiệt tác game nhập vai hành động thế giới mở mang phong cách thần thoại Đông Phương với đồ họa Unreal Engine 5 đỉnh cao, hệ thống chiến đấu tự do đầy tốc độ.',
    longDescription: 'Bước vào thế giới mở kỳ ảo của Cửu Châu, nơi tà ma đang trỗi dậy và phong ấn cổ xưa bị phá vỡ. Trong vai truyền nhân cuối cùng của kiếm phái HanHi, người chơi sẽ làm chủ thanh Thần Kiếm cổ đại, tu luyện các tuyệt kỹ võ học đỉnh cao, thu thập thần thú và tham gia vào những trận chiến nghẹt thở để bảo vệ bang chúng và viết nên truyền kỳ của riêng mình.',
    releaseDate: '15/12/2025',
    platforms: ['PC', 'Console'],
    rating: 4.9,
    status: 'Released',
    downloads: '2.5M+',
    demoType: 'combat',
    features: [
      'Thế giới mở liền mạch rộng lớn hơn 100km² với hệ thống thời tiết động.',
      'Hệ thống chiến đấu Hack-and-Slash tự do kết hợp combo ngũ hành khắc chế.',
      'Cốt truyện phân nhánh sâu sắc với hơn 40 giờ chơi chính tuyến.',
      'Công nghệ đồ họa Unreal Engine 5 chân thực với Ray Tracing hiện đại.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Intel Core i5-8400 | 16 GB RAM | NVIDIA GeForce GTX 1060 6GB | 50 GB SSD',
      recommended: 'Intel Core i7-10700K | 32 GB RAM | NVIDIA GeForce RTX 3070 8GB | 50 GB NVMe SSD'
    }
  },
  {
    id: 'neon-nexus',
    title: 'Neon Nexus: Cyberpunk Heist',
    genre: 'Cyberpunk Action / Hacking Shooter',
    cover: '/src/assets/images/cyber_nexus_cover_1784128777812.jpg',
    description: 'Trò chơi hành động lén lút kết hợp bắn súng góc nhìn thứ nhất, bối cảnh thành phố tương lai rực rỡ ánh đèn neon, nơi thông tin là vũ khí tối thượng.',
    longDescription: 'Năm 2088, tại siêu đô thị Neo-Saigon, các tập đoàn tài phiệt kiểm soát mọi ngóc ngách đời sống bằng mạng lưới trí tuệ nhân tạo thần kinh Nexus. Bạn vào vai một "Ghost Hacker" chuyên nghiệp của HanHi Syndicate, thâm nhập vào các máy chủ tối mật, hack các hệ thống phòng thủ tinh vi, và cướp đoạt những bí mật công nghệ có thể lật đổ cả một đế chế.',
    releaseDate: 'Dự kiến Q4/2026',
    platforms: ['PC', 'Console', 'VR'],
    rating: 4.7,
    status: 'Beta',
    downloads: '100K+ (Đăng ký thử nghiệm)',
    demoType: 'hacking',
    features: [
      'Lối chơi kết hợp độc đáo giữa bắn súng góc nhìn thứ nhất và cơ chế Hacking thời gian thực.',
      'Môi trường tương tác cao, cho phép hack mọi thiết bị điện tử để làm vũ khí.',
      'Cốt truyện đậm chất viễn tưởng cyberpunk với nhạc nền Synthwave sôi động.',
      'Hỗ trợ chế độ thực tế ảo VR đem lại trải nghiệm nhập vai cực hạn.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Intel Core i5-9600K | 16 GB RAM | NVIDIA GeForce GTX 1660 Super | 60 GB SSD',
      recommended: 'Intel Core i7-12700 | 32 GB RAM | NVIDIA GeForce RTX 4060 Ti | 60 GB NVMe SSD'
    }
  },
  {
    id: 'magic-valley',
    title: 'Thung Lũng Diệu Kỳ: Flora Story',
    genre: 'Cozy Farming / Life Simulation',
    cover: '/src/assets/images/cozy_valley_cover_1784128793300.jpg',
    description: 'Trải nghiệm cuộc sống điền viên yên bình, khám phá thung lũng thần tiên kỳ bí, lai tạo các giống cây trồng ma thuật và kết bạn với muông thú đáng yêu.',
    longDescription: 'Tạm rời xa phố thị ồn ào, bạn kế thừa mảnh vườn cổ tích của người ông tại Thung Lũng Diệu Kỳ. Nơi đây không chỉ có trồng trọt chăn nuôi thông thường, mà bạn còn có thể khai phá các hạt giống phát sáng, chế tạo thuốc ma thuật, dọn dẹp các khu rừng bị ô uế và giúp đỡ những linh vật bảo hộ khôi phục lại hào quang của khu rừng thiên diệu.',
    releaseDate: 'Dự kiến Q2/2027',
    platforms: ['PC', 'Mobile', 'Console'],
    rating: 4.8,
    status: 'In Development',
    downloads: 'Chưa mở tải',
    demoType: 'farming',
    features: [
      'Lối chơi thư giãn, nhịp độ chậm rãi, kết nối tâm hồn vô cùng chữa lành.',
      'Hệ thống lai giống cây trồng ma thuật với hơn 200 loài độc lạ phát quang về đêm.',
      'Chăm sóc các sinh vật huyền bí như thỏ sừng dài, cáo chín đuôi mini và rồng đất tí hon.',
      'Hỗ trợ Co-op chơi chung cùng bạn bè tối đa 4 người để cùng xây dựng trang trại.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      minimum: 'Intel Core i3-6100 | 8 GB RAM | NVIDIA GeForce GTX 750 Ti | 10 GB HDD',
      recommended: 'Intel Core i5-8400 | 16 GB RAM | NVIDIA GeForce GTX 1050 Ti | 10 GB SSD'
    }
  }
];

export const BLOGS_DATA: Blog[] = [
  {
    id: 'blog-ue5-than-kiem',
    title: 'Hành trình tối ưu hóa đồ họa Thần Kiếm HanHi trên Unreal Engine 5',
    summary: 'Chia sẻ về cách HanHi Games áp dụng hệ thống chiếu sáng Lumen và tối ưu hóa hệ thống hạt Nanite để đạt tốc độ 60FPS mượt mà trên hệ máy Console thế hệ mới.',
    content: `Trong thế giới phát triển game AAA ngày nay, việc cân bằng giữa chất lượng đồ họa cực hạn và hiệu năng phần cứng luôn là bài toán đau đầu nhất. Với dự án **Thần Kiếm HanHi: Minh Chủ Trỗi Dậy**, đội ngũ kỹ thuật của HanHi Games đã dũng cảm chuyển đổi toàn bộ dự án từ UE4 sang Unreal Engine 5 ngay giữa chu kỳ sản xuất.

### 1. Thách thức với Nanite & Lumen
Nanite cho phép chúng tôi nhập trực tiếp các mô hình 3D có độ chi tiết lên tới hàng triệu đa giác từ ZBrush mà không cần nướng normal map truyền thống. Tuy nhiên, khi kết hợp với hệ thống phản xạ ánh sáng thời gian thực Lumen, lượng tài nguyên GPU ngốn là vô cùng khủng khiếp.
Để giải quyết điều này, chúng tôi đã:
- Thiết lập một hệ thống **Dynamic Resolution Scaling (DRS)** thông minh, điều chỉnh độ phân giải render dựa trên tải trọng tức thời của GPU.
- Tạo các lớp chi tiết ảo để lọc bớt những vật thể quá nhỏ không cần thiết trong những khung cảnh hỗn chiến phức tạp.

### 2. Tối ưu hóa Virtual Shadow Maps (VSM)
Hệ thống bóng đổ bóng mờ ảo (Virtual Shadow Maps) của UE5 đem lại bóng đổ chân thực tuyệt đối nhưng cực kỳ nặng. Đội ngũ kỹ thuật đồ họa của HanHi đã viết lại một phần trình quản lý bộ đệm bóng đổ, gom nhóm các vật thể tĩnh trong môi trường Cửu Châu và chỉ cập nhật bóng đổ động cho nhân vật chính, kẻ địch và các hiệu ứng chiêu thức võ học.

### Kết quả mỹ mãn
Nhờ những nỗ lực bền bỉ suốt 6 tháng ròng rã, phiên bản cập nhật 1.2 của **Thần Kiếm HanHi** đã chính thức cán mốc 60FPS ổn định ở độ phân giải 4K trên PS5 và các dòng card đồ họa tầm trung như RTX 3060 Ti trên PC. Chúng tôi vô cùng tự hào khi đem đến trải nghiệm mượt mà không tì vết cho cộng đồng game thủ Việt!`,
    category: 'Hậu trường Dev',
    author: {
      name: 'Trần Hoàng Nam',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      role: 'Trưởng nhóm Lập trình Đồ họa'
    },
    date: '10/07/2026',
    readTime: '6 phút đọc',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    likes: 342,
    commentsCount: 28,
    tags: ['Unreal Engine 5', 'Tối ưu hóa', 'Thần Kiếm HanHi', 'AAA']
  },
  {
    id: 'blog-phat-trien-cozy-game',
    title: 'Tại sao chúng tôi quyết định phát triển một "Cozy Game" chữa lành?',
    summary: 'Lắng nghe những chia sẻ mộc mạc từ Đạo diễn Nghệ thuật của HanHi Games về nguồn cảm hứng tạo nên dự án Thung Lũng Diệu Kỳ sau những tháng ngày căng thẳng.',
    content: `Sau thành công vang dội nhưng cũng đầy áp lực của dự án game AAA đầu tay **Thần Kiếm HanHi**, cả studio đã rơi vào trạng thái kiệt sức sáng tạo. Giữa những buổi thảo luận căng thẳng về dự án tiếp theo, một câu hỏi đã thay đổi hoàn toàn hướng đi của chúng tôi: "Tại sao không làm điều gì đó thực sự thư thái, giúp con người kết nối lại với thiên nhiên và xoa dịu tâm hồn?"

Và thế là, **Thung Lũng Diệu Kỳ (Flora Story)** ra đời.

### Nguồn cảm hứng từ những bản làng vùng cao Việt Nam
Đội ngũ thiết kế mỹ thuật của HanHi Games đã dành 2 tuần thực tế tại các vùng núi phía Bắc Việt Nam như Sapa, Y Tý. Cảnh sắc ruộng bậc thang óng ánh dưới nắng chiều, những ngôi nhà trình tường lợp ngói âm dương phủ đầy rêu phong và nhịp sống chậm rãi của đồng bào đã thổi hồn vào phong cách nghệ thuật của game.

### Triết lý "Chữa Lành" trong từng pixel
Trong Thung Lũng Diệu Kỳ, không có khái niệm "Game Over", không có những trận đấu boss căng thẳng đến toát mồ hôi. Game tập trung vào:
- **Âm thanh thiên nhiên trung thực**: Tiếng suối róc rách, tiếng lá tre xào xạc trong gió, tiếng dế kêu đêm kết hợp với nhạc cụ dân tộc mộc mạc như sáo trúc, đàn tranh.
- **Tương tác ấm áp**: Người chơi có thể ôm ấp tất cả các loài động vật trong trang trại, cùng chúng đi dạo dưới bóng râm và chăm sóc từng hạt giống thần kỳ từ lúc nảy mầm đến khi phát quang rực rỡ.

Chúng tôi tin rằng, giữa nhịp sống hối hả hiện đại, **Thung Lũng Diệu Kỳ** sẽ là một góc trú ẩn bình yên nhất dành cho tất cả mọi người khi ra mắt vào năm tới.`,
    category: 'Cập nhật Game',
    author: {
      name: 'Nguyễn Hà Vi',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      role: 'Đạo diễn Nghệ thuật'
    },
    date: '05/07/2026',
    readTime: '4 phút đọc',
    cover: 'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&q=80&w=800',
    likes: 512,
    commentsCount: 45,
    tags: ['Cozy Game', 'Nghệ thuật', 'Chữa lành', 'Flora Story']
  },
  {
    id: 'blog-cong-bo-neon-nexus-beta',
    title: 'Chính thức mở cổng đăng ký thử nghiệm giới hạn Neon Nexus: Cyberpunk Heist',
    summary: 'Đợt thử nghiệm Closed Beta đầu tiên dành cho các Ghost Hacker tài năng sẽ bắt đầu vào ngày 25/08 tới. Khám phá các phần quà độc quyền chỉ dành riêng cho Tester đăng ký sớm!',
    content: `Sau hơn 2 năm âm thầm phát triển, **HanHi Games** vô cùng hào hứng công bố đợt Closed Beta đầu tiên của siêu phẩm bắn súng viễn tưởng hành động lén lút **Neon Nexus: Cyberpunk Heist**.

### Thông tin chi tiết đợt thử nghiệm:
- **Thời gian đăng ký**: Từ nay đến hết ngày 20/08/2026.
- **Thời gian thử nghiệm**: Bắt đầu từ 10:00 ngày 25/08 đến hết ngày 31/08/2026.
- **Nền tảng hỗ trợ**: PC (Steam) và Oculus Quest 2/3 (dành cho chế độ VR).
- **Quy mô**: Giới hạn 5,000 tài khoản may mắn được lựa chọn ngẫu nhiên qua email đăng ký.

### Có gì trong bản Closed Beta này?
Người chơi sẽ được trải nghiệm chương đầu tiên của cốt truyện mang tên **"Mã Nguồn Thất Lạc"**, bao gồm:
1. **2 bản đồ nhiệm vụ lớn**: Tòa tháp tập đoàn V-Corp và Khu ổ chuột sầm uất Quận 9 (Neo-Saigon).
2. **Hệ thống cyberware sơ cấp**: Cho phép tùy biến mắt quét hồng ngoại, cánh tay cường lực bẻ khóa vật lý và chip hack điều khiển camera từ xa.
3. **Chế độ chơi Co-op 2 người**: Phối hợp cùng một đồng đội để thực hiện phi vụ đột nhập phối hợp vô cùng kịch tính.

### Phần quà độc quyền cho người tham gia:
Toàn bộ người chơi tham gia đóng góp ý kiến và hoàn thành khảo sát chất lượng trong thời gian thử nghiệm sẽ nhận ngay skin súng **"HanHi Legacy Carbon"** cực ngầu và huy hiệu danh dự **"Early Hacker"** khi game chính thức phát hành thương mại.

Đừng chần chừ, hãy cuộn xuống phần Liên Hệ của website này hoặc nhấp vào nút "Trải nghiệm thử" để đăng ký ngay hôm nay!`,
    category: 'Sự kiện',
    author: {
      name: 'Lê Minh Hải',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      role: 'Giám đốc Sản xuất'
    },
    date: '01/07/2026',
    readTime: '5 phút đọc',
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    likes: 289,
    commentsCount: 19,
    tags: ['Closed Beta', 'Cyberpunk', 'Neon Nexus', 'Sự kiện']
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'm1',
    year: '2023',
    title: 'Khởi đầu Đam mê',
    description: 'HanHi Games được thành lập bởi một nhóm 5 nhà phát triển game giàu kinh nghiệm tại Sài Gòn, chung chí hướng kiến tạo các tựa game đậm bản sắc Việt với chất lượng quốc tế.'
  },
  {
    id: 'm2',
    year: '2024',
    title: 'Mở rộng Đội ngũ',
    description: 'Studio nhận được quỹ đầu tư thiên thần, tăng quy mô lên 25 nhân sự xuất sắc, chính thức khởi động dự án game AAA "Thần Kiếm HanHi" trên nền tảng Unreal Engine 5.'
  },
  {
    id: 'm3',
    year: '2025',
    title: 'Kiệt tác Ra mắt',
    description: 'Phát hành chính thức "Thần Kiếm HanHi" trên Steam và PlayStation 5. Tựa game nhận được vô số lời khen ngợi từ cộng đồng game thủ quốc tế, đạt cột mốc 2.5 triệu lượt tải xuống chỉ sau 6 tháng.'
  },
  {
    id: 'm4',
    year: '2026',
    title: 'Đa dạng hóa Thể loại',
    description: 'Bắt đầu phát triển song song hai dự án mới: tựa game Cyberpunk hành động lén lút "Neon Nexus" và tựa game Cozy chữa lành siêu dễ thương "Thung Lũng Diệu Kỳ".'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 't1',
    name: 'Phạm Nhật Anh',
    role: 'CEO & Đồng sáng lập',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    bio: 'Hơn 12 năm chinh chiến trong ngành công nghiệp game toàn cầu, từng làm việc tại các studio lớn như Gameloft và Ubisoft trước khi trở về nước gầy dựng HanHi Games.',
    socials: { twitter: '@anhpham_hanhi', linkedin: 'nhat-anh-pham-hanhi' }
  },
  {
    id: 't2',
    name: 'Nguyễn Hà Vi',
    role: 'Đạo diễn Nghệ thuật',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    bio: 'Nữ họa sĩ 3D tài năng đứng sau vẻ đẹp huyền ảo của Thần Kiếm HanHi và phong cách dịu mát của Thung Lũng Diệu Kỳ. Tốt nghiệp Thạc sĩ Mỹ thuật Công nghiệp tại Paris.',
    socials: { linkedin: 'ha-vi-art-hanhi', github: 'haviart' }
  },
  {
    id: 't3',
    name: 'Trần Hoàng Nam',
    role: 'Trưởng nhóm Lập trình Đồ họa',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    bio: 'Phù thủy mã nguồn với khả năng tối ưu hóa đồ họa cực đại. Chuyên gia hàng đầu Việt Nam về kiến trúc Unreal Engine và lập trình đổ bóng (shader programming).',
    socials: { github: 'namtran-graphics' }
  },
  {
    id: 't4',
    name: 'Lê Minh Hải',
    role: 'Giám đốc Sản xuất',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    bio: 'Chịu trách nhiệm vận hành, điều phối tiến độ và đảm bảo mỗi tựa game khi xuất xưởng đều đạt độ hoàn thiện cao nhất. Đam mê vô tận với các trò chơi chiến thuật cổ điển.',
    socials: { twitter: '@haile_prod' }
  }
];
