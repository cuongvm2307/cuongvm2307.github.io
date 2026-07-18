import React from 'react';
import { FileCheck, Globe2, Mail, ShieldCheck } from 'lucide-react';
import { Language } from '../i18n';

interface PolicyTermsSectionProps {
  language: Language;
}

interface PolicyBlock {
  title: string;
  items: string[];
}

export default function PolicyTermsSection({ language }: PolicyTermsSectionProps) {
  const isVi = language === 'vi';
  const updated = '2026-07-18';
  const t = isVi
    ? {
      eyebrow: 'Policy / Terms of Use',
      title: 'Chính Sách Quyền Riêng Tư & Điều Khoản Sử Dụng',
      intro: 'Trang này áp dụng cho các ứng dụng, game, prototype và dịch vụ số do Cường VM phát triển hoặc phát hành trên Google Play, Apple App Store và các nền tảng phân phối hợp pháp khác.',
      updated: 'Cập nhật lần cuối',
      owner: 'Nhà phát triển',
      ownerName: 'Cường VM',
      contact: 'Liên hệ chính sách',
      email: 'cuongvm2307@gmail.com',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Use',
      complianceTitle: 'Tuân Thủ Nền Tảng & Khu Vực',
      privacy: [
        {
          title: '1. Phạm vi áp dụng',
          items: [
            'Chính sách này mô tả cách các app/game của Cường VM có thể thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ dữ liệu người dùng.',
            'Một app/game cụ thể có thể có phần mô tả dữ liệu riêng trong Google Play Data Safety, Apple Privacy Nutrition Label hoặc trong màn hình cài đặt của sản phẩm. Nếu có khác biệt, phần mô tả cụ thể của sản phẩm sẽ được ưu tiên.'
          ]
        },
        {
          title: '2. Dữ liệu có thể được thu thập',
          items: [
            'Thông tin thiết bị và kỹ thuật: model thiết bị, hệ điều hành, phiên bản app, ngôn ngữ, quốc gia/khu vực, crash log, hiệu năng, network status và mã định danh cài đặt không trực tiếp nhận dạng cá nhân.',
            'Dữ liệu gameplay/sử dụng: level, điểm số, tiến trình chơi, achievement, session length, hành vi tương tác với tính năng, tutorial, lỗi phát sinh và các sự kiện phân tích để cải thiện trải nghiệm.',
            'Dữ liệu tài khoản hoặc liên hệ chỉ được thu thập khi sản phẩm có tính năng đăng nhập, hỗ trợ khách hàng, cloud save, leaderboard, multiplayer, gửi phản hồi hoặc nhận thông báo.',
            'Dữ liệu mua hàng có thể được xử lý qua Google Play Billing hoặc Apple In-App Purchase. Cường VM không lưu trữ số thẻ thanh toán đầy đủ.'
          ]
        },
        {
          title: '3. Mục đích sử dụng dữ liệu',
          items: [
            'Vận hành app/game, lưu tiến trình, đồng bộ tính năng, xử lý lỗi, chống gian lận, bảo vệ hệ thống và hỗ trợ người dùng.',
            'Phân tích hiệu năng, cải thiện gameplay, cân bằng nội dung, đo lường retention, tối ưu UI/UX và phát triển tính năng mới.',
            'Hiển thị quảng cáo, đo lường chiến dịch hoặc cá nhân hóa nội dung chỉ khi sản phẩm tích hợp dịch vụ quảng cáo/analytics và được nền tảng/luật áp dụng cho phép.',
            'Thực hiện nghĩa vụ pháp lý, phản hồi yêu cầu hợp lệ từ cơ quan có thẩm quyền và tuân thủ chính sách của Google Play, Apple App Store hoặc nền tảng phân phối.'
          ]
        },
        {
          title: '4. Quyền truy cập thiết bị',
          items: [
            'Một số sản phẩm có thể yêu cầu quyền như internet, lưu trữ, thông báo, camera, microphone, vị trí, bluetooth hoặc danh bạ nếu tính năng thật sự cần đến quyền đó.',
            'Quyền nhạy cảm sẽ được giải thích trong app trước hoặc tại thời điểm xin quyền, và người dùng có thể từ chối hoặc thu hồi trong cài đặt hệ thống.',
            'Nếu quyền bị từ chối, một số tính năng liên quan có thể không hoạt động, nhưng app/game vẫn cố gắng cung cấp trải nghiệm còn lại khi có thể.'
          ]
        },
        {
          title: '5. Chia sẻ dữ liệu và bên thứ ba',
          items: [
            'Dữ liệu có thể được xử lý bởi các nhà cung cấp cần thiết như hosting, crash reporting, analytics, ads, attribution, cloud save, multiplayer backend, customer support, Google Play Services hoặc Apple services.',
            'Bên thứ ba chỉ được sử dụng cho mục đích vận hành, phân tích, bảo mật, thanh toán, quảng cáo hoặc hỗ trợ tính năng đã nêu trong sản phẩm.',
            'Cường VM không bán thông tin cá nhân của người dùng. Việc chia sẻ dữ liệu, nếu có, sẽ tuân thủ phần khai báo dữ liệu của từng app/game trên store.'
          ]
        },
        {
          title: '6. Trẻ em và người dùng vị thành niên',
          items: [
            'Nếu một app/game hướng đến trẻ em hoặc có thể được trẻ em sử dụng, sản phẩm sẽ tuân thủ yêu cầu của Google Play Families Policy, Apple Kids Category và luật bảo vệ trẻ em áp dụng tại khu vực phát hành.',
            'Sản phẩm dành cho trẻ em sẽ hạn chế thu thập dữ liệu, tránh quảng cáo hành vi không phù hợp, xin đồng ý của phụ huynh khi cần và chỉ dùng SDK/dịch vụ phù hợp với trẻ em.',
            'Nếu phụ huynh hoặc người giám hộ cho rằng trẻ em đã cung cấp dữ liệu cá nhân, vui lòng liên hệ email chính sách để yêu cầu xem xét hoặc xóa dữ liệu.'
          ]
        },
        {
          title: '7. Lưu trữ, bảo mật và xóa dữ liệu',
          items: [
            'Dữ liệu được lưu trong thời gian cần thiết để vận hành sản phẩm, cung cấp hỗ trợ, tuân thủ pháp lý, chống gian lận hoặc theo thời hạn của dịch vụ bên thứ ba.',
            'Các biện pháp hợp lý được áp dụng để bảo vệ dữ liệu, bao gồm giới hạn quyền truy cập, dùng dịch vụ nền tảng đáng tin cậy và giảm thiểu dữ liệu không cần thiết.',
            'Người dùng có thể yêu cầu truy cập, chỉnh sửa, xuất, rút đồng ý hoặc xóa dữ liệu cá nhân bằng cách gửi email kèm tên app/game, nền tảng và thông tin nhận dạng tài khoản nếu có.'
          ]
        }
      ] as PolicyBlock[],
      compliance: [
        {
          title: 'Google Play và Apple App Store',
          items: [
            'Mỗi app/game sẽ khai báo chính xác các loại dữ liệu thu thập/chia sẻ trong Google Play Console Data Safety và Apple App Store Connect App Privacy.',
            'Các sản phẩm có đăng nhập, tạo tài khoản hoặc lưu dữ liệu người dùng sẽ cung cấp cơ chế hỗ trợ xóa tài khoản/dữ liệu theo yêu cầu nền tảng khi áp dụng.',
            'Các SDK quảng cáo, analytics, billing, crash reporting hoặc sign-in sẽ được cấu hình theo yêu cầu của nền tảng, bao gồm consent, tracking permission và giới hạn dữ liệu cho trẻ em khi cần.'
          ]
        },
        {
          title: 'Luật và khu vực phát hành',
          items: [
            'Sản phẩm sẽ cố gắng tuân thủ các luật bảo vệ dữ liệu và người tiêu dùng áp dụng tại khu vực phát hành, bao gồm nhưng không giới hạn GDPR/EEA, UK GDPR, CCPA/CPRA California, COPPA Hoa Kỳ, LGPD Brazil, PIPL Trung Quốc và các quy định tương đương.',
            'Người dùng tại các khu vực có quyền riêng tư bổ sung có thể yêu cầu biết dữ liệu được xử lý, nhận bản sao, chỉnh sửa, hạn chế xử lý, phản đối, rút đồng ý hoặc xóa dữ liệu theo luật áp dụng.',
            'Một số tính năng, quảng cáo, mua hàng, multiplayer, cloud save hoặc nội dung có thể bị giới hạn theo quốc gia, độ tuổi, yêu cầu pháp lý hoặc chính sách store.'
          ]
        }
      ] as PolicyBlock[],
      terms: [
        {
          title: '1. Chấp nhận điều khoản',
          items: [
            'Bằng việc tải, cài đặt, truy cập hoặc sử dụng app/game, người dùng đồng ý với Chính Sách Quyền Riêng Tư và Điều Khoản Sử Dụng này.',
            'Nếu không đồng ý, người dùng nên ngừng sử dụng và gỡ cài đặt sản phẩm.'
          ]
        },
        {
          title: '2. Cách sử dụng được phép',
          items: [
            'Người dùng cần sử dụng sản phẩm đúng pháp luật, đúng mục đích giải trí/công cụ và không gây ảnh hưởng đến hệ thống, người dùng khác hoặc dịch vụ bên thứ ba.',
            'Không được khai thác lỗi, gian lận, reverse engineer, can thiệp file, bypass thanh toán, tự động hóa bất thường, phát tán mã độc hoặc sử dụng sản phẩm để vi phạm quyền của bên khác.'
          ]
        },
        {
          title: '3. Nội dung, sở hữu trí tuệ và license',
          items: [
            'Mã nguồn, thiết kế, gameplay, hình ảnh, âm thanh, logo, tài liệu và nội dung trong sản phẩm thuộc Cường VM hoặc các bên cấp phép tương ứng.',
            'Người dùng được cấp quyền cá nhân, giới hạn, không độc quyền, không chuyển nhượng để sử dụng sản phẩm theo đúng điều khoản và quy định của nền tảng phân phối.',
            'Không được sao chép, phân phối lại, bán, cho thuê, sửa đổi hoặc tạo sản phẩm phái sinh từ nội dung của app/game nếu chưa có văn bản cho phép.'
          ]
        },
        {
          title: '4. Mua hàng, quảng cáo và hoàn tiền',
          items: [
            'In-app purchase, subscription hoặc nội dung trả phí, nếu có, được xử lý bởi Google Play, Apple App Store hoặc nhà cung cấp thanh toán hợp lệ.',
            'Việc hoàn tiền, hủy subscription và tranh chấp thanh toán tuân theo chính sách của nền tảng nơi giao dịch được thực hiện.',
            'Sản phẩm có thể hiển thị quảng cáo hoặc offer được tài trợ nếu đã được khai báo trong app/store listing.'
          ]
        },
        {
          title: '5. Cập nhật, thay đổi và chấm dứt',
          items: [
            'Sản phẩm có thể được cập nhật, thay đổi, tạm dừng hoặc ngừng hỗ trợ vì lý do kỹ thuật, vận hành, bảo mật, pháp lý hoặc yêu cầu nền tảng.',
            'Cường VM có thể hạn chế quyền truy cập nếu phát hiện hành vi gian lận, lạm dụng, vi phạm điều khoản hoặc gây rủi ro cho hệ thống/người dùng khác.',
            'Điều khoản có thể được cập nhật theo thời gian. Ngày cập nhật mới nhất sẽ được hiển thị trên trang này.'
          ]
        },
        {
          title: '6. Miễn trừ và giới hạn trách nhiệm',
          items: [
            'Sản phẩm được cung cấp theo hiện trạng trong phạm vi pháp luật cho phép. Không bảo đảm sản phẩm luôn không lỗi, không gián đoạn hoặc phù hợp với mọi thiết bị/cấu hình.',
            'Cường VM không chịu trách nhiệm cho thiệt hại gián tiếp, mất dữ liệu, mất lợi nhuận hoặc sự cố do dịch vụ bên thứ ba, thiết bị, network hoặc hành vi sử dụng sai điều khoản, trong phạm vi pháp luật cho phép.'
          ]
        }
      ] as PolicyBlock[]
    }
    : {
      eyebrow: 'Policy / Terms of Use',
      title: 'Privacy Policy & Terms of Use',
      intro: 'This page applies to apps, games, prototypes, and digital services developed or published by Cuong VM on Google Play, the Apple App Store, and other lawful distribution platforms.',
      updated: 'Last updated',
      owner: 'Developer',
      ownerName: 'Cuong VM',
      contact: 'Policy contact',
      email: 'cuongvm2307@gmail.com',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Use',
      complianceTitle: 'Platform & Regional Compliance',
      privacy: [
        {
          title: '1. Scope',
          items: [
            'This policy explains how Cuong VM apps/games may collect, use, store, share, and protect user data.',
            'A specific app/game may include product-specific data disclosures in Google Play Data Safety, Apple Privacy Nutrition Labels, or in-app settings. Product-specific disclosures take priority where they are more specific.'
          ]
        },
        {
          title: '2. Data that may be collected',
          items: [
            'Device and technical data: device model, operating system, app version, language, country/region, crash logs, performance data, network status, and installation identifiers that do not directly identify a person.',
            'Gameplay and usage data: levels, scores, progress, achievements, session length, feature interactions, tutorial events, errors, and analytics events used to improve the experience.',
            'Account or contact data is collected only when a product includes sign-in, support, cloud save, leaderboards, multiplayer, feedback, or notification features.',
            'Purchase data may be processed through Google Play Billing or Apple In-App Purchase. Cuong VM does not store full payment card numbers.'
          ]
        },
        {
          title: '3. How data is used',
          items: [
            'To operate the app/game, save progress, sync features, fix bugs, prevent fraud, protect systems, and support users.',
            'To analyze performance, improve gameplay, balance content, measure retention, optimize UI/UX, and develop new features.',
            'To show ads, measure campaigns, or personalize content only when the product integrates advertising/analytics services and applicable platform rules or laws allow it.',
            'To comply with legal obligations, respond to valid authority requests, and follow Google Play, Apple App Store, or other platform policies.'
          ]
        },
        {
          title: '4. Device permissions',
          items: [
            'Some products may request permissions such as internet, storage, notifications, camera, microphone, location, bluetooth, or contacts when a feature actually needs that permission.',
            'Sensitive permissions will be explained in-app before or when requested, and users can deny or revoke permissions in system settings.',
            'If a permission is denied, related features may not work, but the app/game will try to keep the remaining experience available where possible.'
          ]
        },
        {
          title: '5. Data sharing and third parties',
          items: [
            'Data may be processed by necessary providers such as hosting, crash reporting, analytics, ads, attribution, cloud save, multiplayer backend, customer support, Google Play Services, or Apple services.',
            'Third parties are used only for operation, analytics, security, payment, advertising, or disclosed product features.',
            'Cuong VM does not sell personal information. Any data sharing will follow the data disclosures made for each app/game on the relevant store.'
          ]
        },
        {
          title: '6. Children and minors',
          items: [
            'If an app/game is directed to children or likely to be used by children, the product will follow applicable requirements such as Google Play Families Policy, Apple Kids Category rules, and regional child privacy laws.',
            'Child-directed products will limit data collection, avoid inappropriate behavioral advertising, request parental consent where required, and use child-appropriate SDKs/services.',
            'Parents or guardians who believe a child has provided personal data may contact the policy email to request review or deletion.'
          ]
        },
        {
          title: '7. Retention, security, and deletion',
          items: [
            'Data is retained only as long as needed to operate the product, provide support, comply with law, prevent fraud, or meet third-party service retention periods.',
            'Reasonable safeguards are used to protect data, including limited access, trusted platform services, and minimization of unnecessary data.',
            'Users may request access, correction, export, consent withdrawal, or deletion of personal data by emailing the app/game name, platform, and account identifier if applicable.'
          ]
        }
      ] as PolicyBlock[],
      compliance: [
        {
          title: 'Google Play and Apple App Store',
          items: [
            'Each app/game will accurately disclose collected/shared data in Google Play Console Data Safety and Apple App Store Connect App Privacy.',
            'Products with sign-in, account creation, or stored user data will provide support for account/data deletion where platform rules require it.',
            'Advertising, analytics, billing, crash reporting, and sign-in SDKs will be configured according to platform requirements, including consent, tracking permission, and child-data restrictions where needed.'
          ]
        },
        {
          title: 'Laws and release regions',
          items: [
            'Products are intended to comply with applicable privacy and consumer-protection laws in release regions, including but not limited to GDPR/EEA, UK GDPR, California CCPA/CPRA, US COPPA, Brazil LGPD, China PIPL, and equivalent rules.',
            'Users in regions with additional privacy rights may request to know what data is processed, receive a copy, correct it, restrict processing, object, withdraw consent, or delete data under applicable law.',
            'Some features, ads, purchases, multiplayer, cloud save, or content may be restricted by country, age rating, legal requirements, or store policy.'
          ]
        }
      ] as PolicyBlock[],
      terms: [
        {
          title: '1. Acceptance',
          items: [
            'By downloading, installing, accessing, or using an app/game, users agree to this Privacy Policy and Terms of Use.',
            'If users do not agree, they should stop using and uninstall the product.'
          ]
        },
        {
          title: '2. Permitted use',
          items: [
            'Users must use products lawfully, for their intended entertainment/tool purpose, and without harming systems, other users, or third-party services.',
            'Users must not exploit bugs, cheat, reverse engineer, tamper with files, bypass payments, automate abnormal use, distribute malware, or use products to violate others rights.'
          ]
        },
        {
          title: '3. Content, intellectual property, and license',
          items: [
            'Source code, design, gameplay, images, audio, logos, documentation, and product content belong to Cuong VM or their respective licensors.',
            'Users receive a personal, limited, non-exclusive, non-transferable license to use the product according to these terms and distribution platform rules.',
            'Users may not copy, redistribute, sell, rent, modify, or create derivative products from app/game content without written permission.'
          ]
        },
        {
          title: '4. Purchases, ads, and refunds',
          items: [
            'In-app purchases, subscriptions, or paid content, if available, are processed by Google Play, the Apple App Store, or another lawful payment provider.',
            'Refunds, subscription cancellation, and payment disputes follow the policies of the platform where the transaction was made.',
            'Products may show ads or sponsored offers if they are disclosed in the app or store listing.'
          ]
        },
        {
          title: '5. Updates, changes, and termination',
          items: [
            'Products may be updated, changed, suspended, or discontinued for technical, operational, security, legal, or platform-policy reasons.',
            'Cuong VM may restrict access if fraud, abuse, terms violations, or risks to systems/other users are detected.',
            'These terms may be updated over time. The latest update date will be shown on this page.'
          ]
        },
        {
          title: '6. Disclaimer and limitation of liability',
          items: [
            'Products are provided as-is to the extent permitted by law. No guarantee is made that products will always be error-free, uninterrupted, or compatible with every device/configuration.',
            'Cuong VM is not liable for indirect damages, data loss, lost profits, or incidents caused by third-party services, devices, networks, or misuse, to the extent permitted by law.'
          ]
        }
      ] as PolicyBlock[]
    };

  const renderBlock = (block: PolicyBlock, tone: 'indigo' | 'emerald' | 'sky' = 'indigo') => {
    const bulletColor = tone === 'emerald' ? 'text-emerald-400' : tone === 'sky' ? 'text-sky-400' : 'text-indigo-400';

    return (
      <article key={block.title} className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 sm:p-6">
        <h3 className="text-white text-sm sm:text-base font-bold mb-3">{block.title}</h3>
        <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className={`${bulletColor} mt-1`}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  };

  return (
    <section id="policy" className="py-24 bg-slate-900 border-t border-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono font-black text-indigo-400 uppercase tracking-widest block mb-2">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-3xl">
            {t.intro}
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
              <span className="text-slate-500 block font-mono uppercase">{t.updated}</span>
              <span className="text-slate-200 font-bold">{updated}</span>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
              <span className="text-slate-500 block font-mono uppercase">{t.owner}</span>
              <span className="text-slate-200 font-bold">{t.ownerName}</span>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
              <span className="text-slate-500 block font-mono uppercase">{t.contact}</span>
              <a className="text-indigo-300 hover:text-white font-bold break-all" href={`mailto:${t.email}`}>
                {t.email}
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 p-2.5 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold">{t.privacyTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {t.privacy.map((block) => renderBlock(block, 'indigo'))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-sky-500/10 border border-sky-500/20 text-sky-400 p-2.5 rounded-xl">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold">{t.complianceTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {t.compliance.map((block) => renderBlock(block, 'sky'))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-bold">{t.termsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {t.terms.map((block) => renderBlock(block, 'emerald'))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>{t.contact}</span>
          </div>
          <a className="text-indigo-300 hover:text-white text-sm font-mono break-all" href={`mailto:${t.email}`}>
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
