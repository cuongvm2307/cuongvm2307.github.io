import React from 'react';
import { FileCheck, ShieldCheck } from 'lucide-react';
import { Language } from '../i18n';

interface PolicyTermsSectionProps {
  language: Language;
}

export default function PolicyTermsSection({ language }: PolicyTermsSectionProps) {
  const isVi = language === 'vi';
  const updated = '2026-07-18';
  const t = isVi
    ? {
      eyebrow: 'Policy / Terms of Use',
      title: 'Chính Sách Quyền Riêng Tư & Điều Khoản Sử Dụng',
      intro: 'Trang này được tạo để cung cấp đường dẫn chính sách khi phát hành ứng dụng hoặc game lên Google Play và Apple App Store.',
      privacy: 'Chính Sách Quyền Riêng Tư',
      terms: 'Điều Khoản Sử Dụng',
      updated: 'Cập nhật lần cuối',
      itemsPrivacy: [
        'Ứng dụng/game do Cường VM phát triển chỉ thu thập dữ liệu cần thiết cho vận hành sản phẩm, phân tích lỗi, cải thiện trải nghiệm và các tính năng đã thông báo trong ứng dụng.',
        'Nếu có dùng dịch vụ bên thứ ba như analytics, crash reporting, ads, in-app purchase hoặc đăng nhập, dữ liệu sẽ được xử lý theo chính sách của nhà cung cấp tương ứng.',
        'Không bán thông tin cá nhân của người dùng. Người dùng có thể liên hệ qua email để yêu cầu hỗ trợ, giải thích hoặc xóa dữ liệu nếu sản phẩm có lưu trữ dữ liệu định danh.',
        'Với trẻ em, sản phẩm sẽ tuân theo yêu cầu nền tảng và khu vực phát hành. Nếu một sản phẩm hướng tới trẻ em, phần mô tả riêng của sản phẩm sẽ nêu rõ cách xử lý dữ liệu.'
      ],
      itemsTerms: [
        'Người dùng cần sử dụng ứng dụng/game đúng pháp luật, không khai thác lỗi, can thiệp trái phép, đảo ngược mã nguồn hoặc gây ảnh hưởng tới hệ thống/dịch vụ.',
        'Nội dung, mã nguồn, hình ảnh, âm thanh và tài sản trong sản phẩm thuộc quyền sở hữu của tác giả hoặc các bên cấp phép tương ứng.',
        'Sản phẩm có thể được cập nhật, thay đổi tính năng hoặc ngừng hỗ trợ tùy theo tình trạng phát triển và yêu cầu nền tảng.',
        'Chính sách này là mẫu tổng quát cho portfolio và sản phẩm cá nhân. Với từng app/game cụ thể, phần metadata trên Google Play hoặc Apple App Store có thể bổ sung điều khoản chi tiết hơn.'
      ],
      contact: 'Liên hệ chính sách',
      email: 'cuongvm2307@gmail.com'
    }
    : {
      eyebrow: 'Policy / Terms of Use',
      title: 'Privacy Policy & Terms of Use',
      intro: 'This page is provided as a policy URL for publishing apps or games on Google Play and the Apple App Store.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      updated: 'Last updated',
      itemsPrivacy: [
        'Apps/games developed by Cuong VM only collect data needed to operate the product, diagnose issues, improve the experience, and support features disclosed inside the app.',
        'If third-party services are used, such as analytics, crash reporting, ads, in-app purchases, or sign-in, data is handled according to the policies of those providers.',
        'Personal information is not sold. Users may contact the email below to request support, clarification, or deletion of identifiable data if a product stores such data.',
        'For children, products follow platform and regional requirements. If a product is intended for children, its product-specific description will explain the data handling approach.'
      ],
      itemsTerms: [
        'Users must use apps/games lawfully and must not exploit bugs, tamper with services, reverse engineer code, or disrupt systems.',
        'Content, code, images, audio, and assets in each product belong to the author or their respective licensors.',
        'Products may be updated, changed, or discontinued depending on development status and platform requirements.',
        'This page is a general policy template for portfolio and personal products. Product-specific Google Play or Apple App Store metadata may include additional details.'
      ],
      contact: 'Policy contact',
      email: 'cuongvm2307@gmail.com'
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
          <p className="text-slate-500 text-xs font-mono mt-3">
            {t.updated}: {updated}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 p-2.5 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-white text-lg font-bold">{t.privacy}</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {t.itemsPrivacy.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-white text-lg font-bold">{t.terms}</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {t.itemsTerms.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-slate-400 text-sm">{t.contact}</span>
          <a className="text-indigo-300 hover:text-white text-sm font-mono" href={`mailto:${t.email}`}>
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
