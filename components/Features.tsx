import React from 'react';
import { Activity, Headphones, Zap, Lock } from 'lucide-react';

const featuresList = [
  {
    icon: Activity,
    title: 'آپتایم ۹۹.۹٪',
    description: 'تضمین پایداری سرویس‌ها با استفاده از زیرساخت ابری توزیع شده و مانیتورینگ لحظه‌ای.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Headphones,
    title: 'پشتیبانی ۲۴ ساعته',
    description: 'تیم متخصص ما در هر ساعت از شبانه‌روز آماده پاسخگویی به مشکلات فنی شماست.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: Zap,
    title: 'هارد NVMe پرسرعت',
    description: 'سرعت بارگذاری سایت خود را با درایوهای NVMe نسل جدید تا ۱۰ برابر افزایش دهید.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: Lock,
    title: 'گواهی SSL رایگان',
    description: 'امنیت سایت خود را با گواهینامه SSL رایگان برای تمام دامنه‌های متصل تضمین کنید.',
    color: 'text-brand-neon',
    bg: 'bg-brand-neon/10',
  },
];

const Features: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-brand-purple/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-purple/5"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${feature.bg} ${feature.color} transition-transform group-hover:scale-110 duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;