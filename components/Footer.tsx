import React from 'react';
import { Server, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue">
                <Server className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">هاست</span>
            </div>
            <p className="mb-6 max-w-sm text-sm text-slate-400 leading-7">
              قدرت‌بخش توسعه‌دهندگان و کسب‌وکارها با راه‌حل‌های میزبانی پرسرعت، مقیاس‌پذیر و امن. همین امروز به آینده وب بپیوندید.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">میزبانی وب</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">هاست اشتراکی</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">سرور مجازی (VPS)</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">سرور اختصاصی</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">هاست ابری</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">شرکت</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">فرصت‌های شغلی</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">وبلاگ</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">پشتیبانی</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">مرکز آموزش</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">وضعیت سرورها</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">گزارش تخلف</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-brand-neon transition-colors">قوانین و مقررات</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} هاست. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
             <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <span>تمامی سیستم‌ها فعال هستند</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;