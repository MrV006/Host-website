import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-blue/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-sm font-medium text-brand-purple mb-8 backdrop-blur-md shadow-lg shadow-brand-purple/10 transition-transform hover:scale-105 cursor-default">
          <span className="relative flex h-2 w-2 ml-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
          </span>
          نسل جدید میزبانی ابری اینجاست
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl mb-6 leading-tight">
          میزبانی وب با <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-brand-neon via-brand-blue to-brand-purple bg-clip-text text-transparent drop-shadow-2xl">
            سرعت نور
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 mb-12 leading-8 font-light">
          پایداری، امنیت و سرعت را با ما تجربه کنید. زیرساختی قدرتمند برای رشد کسب‌وکار آنلاین شما با پشتیبانی که همیشه کنار شماست.
        </p>

        {/* Domain Search Bar */}
        <div className="mx-auto max-w-3xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-neon rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-2 rounded-xl sm:rounded-2xl">
            <div className="relative flex-grow w-full">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                dir="ltr"
                placeholder="نام دامنه خود را جستجو کنید..."
                className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 pr-12 text-lg h-14 rounded-xl text-left font-sans"
              />
            </div>
            <button className="w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
              جستجو
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-neon"></span> .com فقط ۹.۹۹$</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span> .ir رایگان روی هاست</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;