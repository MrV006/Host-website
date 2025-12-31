import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  highlight: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    id: 'startup',
    name: 'شروع',
    description: 'بهترین گزینه برای دانشجویان و سایت‌های شخصی.',
    priceMonthly: '۱۵۰,۰۰۰',
    priceYearly: '۱,۵۰۰,۰۰۰',
    features: [
      '۱ وب‌سایت',
      '۵ گیگابایت فضای NVMe',
      'پلی‌لیست پهنای باند نامحدود',
      'گواهی SSL رایگان',
      'پشتیبانی تیکت',
    ],
    highlight: false,
    buttonText: 'انتخاب پلن',
  },
  {
    id: 'pro',
    name: 'حرفه‌ای',
    description: 'منابع بیشتر برای کسب‌وکارهای در حال رشد.',
    priceMonthly: '۴۵۰,۰۰۰',
    priceYearly: '۴,۵۰۰,۰۰۰',
    features: [
      '۵ وب‌سایت',
      '۵۰ گیگابایت فضای NVMe',
      '۳ گیگابایت رم اختصاصی',
      'دامنه .ir رایگان',
      'بکاپ‌گیری روزانه',
      'پشتیبانی اولویت‌دار',
    ],
    highlight: true,
    buttonText: 'شروع دوره آزمایشی',
  },
  {
    id: 'enterprise',
    name: 'سازمانی',
    description: 'حداکثر قدرت برای فروشگاه‌های بزرگ.',
    priceMonthly: '۱,۲۰۰,۰۰۰',
    priceYearly: '۱۲,۰۰۰,۰۰۰',
    features: [
      'وب‌سایت نامحدود',
      '۲۰۰ گیگابایت فضای NVMe',
      '۸ گیگابایت رم اختصاصی',
      'IP اختصاصی رایگان',
      'لایسنس سی‌پنل رایگان',
      'پشتیبانی تلفنی ۲۴/۷',
    ],
    highlight: false,
    buttonText: 'تماس با فروش',
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            تعرفه‌های مقرون‌به‌صرفه
          </h2>
          <p className="text-lg text-slate-400">
            پلن مناسب خود را انتخاب کنید و همین امروز آنلاین شوید.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center bg-slate-900 border border-white/10 rounded-full p-1 shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/25' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ماهانه
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isAnnual 
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/25' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              سالانه
              <span className="absolute -top-3 -left-4 bg-green-500 text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce shadow-lg shadow-green-500/20">
                ۲۰٪ تخفیف
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.highlight
                  ? 'bg-slate-900/60 border-2 border-brand-purple shadow-2xl shadow-brand-purple/20 md:-mt-8 md:mb-8 z-10'
                  : 'bg-slate-900/30 border border-white/10 hover:border-white/20 hover:bg-slate-900/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  پرفروش‌ترین
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  {isAnnual ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-sm font-medium text-slate-400">تومان</span>
                <span className="text-xs text-slate-500 mr-1">
                   / {isAnnual ? 'سالانه' : 'ماهانه'}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-brand-purple" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-brand-purple hover:bg-brand-purple/90 text-white shadow-lg shadow-brand-purple/25'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;