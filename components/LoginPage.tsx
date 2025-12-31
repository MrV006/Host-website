'use client';

import React, { useState } from 'react';
import { Mail, Lock, User, Loader2, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      if (isLogin) {
        // Redirect to dashboard instead of alert
        onNavigate('dashboard');
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert('رمز عبور مطابقت ندارد');
          return;
        }
        alert('ثبت‌نام انجام شد! لطفا وارد شوید.');
        setIsLogin(true);
        setFormData({ ...formData, password: '', confirmPassword: '' });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50">
          
          {/* Tabs */}
          <div className="flex bg-slate-950/50 p-1.5 rounded-xl mb-8 border border-white/5">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
                isLogin 
                  ? 'bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 text-white shadow-lg shadow-brand-purple/10 ring-1 ring-white/10' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ورود
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
                !isLogin 
                  ? 'bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 text-white shadow-lg shadow-brand-purple/10 ring-1 ring-white/10' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'خوش آمدید!' : 'ساخت حساب کاربری'}
            </h2>
            <p className="text-slate-400 text-sm">
              {isLogin 
                ? 'برای مدیریت سرویس‌های خود وارد شوید' 
                : 'همین امروز به جمع مشتریان ما بپیوندید'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {!isLogin && (
              <div className="relative group animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 group-focus-within:text-brand-purple transition-colors pointer-events-none">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="نام و نام خانوادگی"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/10 focus:border-brand-purple/50 rounded-xl px-12 py-3.5 outline-none text-white placeholder-slate-500 transition-all focus:ring-1 focus:ring-brand-purple/50"
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 group-focus-within:text-brand-blue transition-colors pointer-events-none">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                required
                dir="ltr"
                placeholder="ایمیل (example@mail.com)"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-white/10 focus:border-brand-blue/50 rounded-xl px-12 py-3.5 outline-none text-white placeholder-slate-500 transition-all focus:ring-1 focus:ring-brand-blue/50 text-right"
              />
            </div>

            <div className="relative group">
              <div className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 group-focus-within:text-brand-neon transition-colors pointer-events-none">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                dir="ltr"
                placeholder="رمز عبور"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-white/10 focus:border-brand-neon/50 rounded-xl px-12 py-3.5 outline-none text-white placeholder-slate-500 transition-all focus:ring-1 focus:ring-brand-neon/50 text-right"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative group animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 group-focus-within:text-brand-neon transition-colors pointer-events-none">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  dir="ltr"
                  placeholder="تکرار رمز عبور"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/10 focus:border-brand-neon/50 rounded-xl px-12 py-3.5 outline-none text-white placeholder-slate-500 transition-all focus:ring-1 focus:ring-brand-neon/50 text-right"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm animate-in fade-in duration-300">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-slate-300 transition-colors">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-slate-900 checked:border-brand-purple checked:bg-brand-purple transition-all" />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  مرا به خاطر بسپار
                </label>
                <a href="#" className="text-brand-blue hover:text-brand-neon transition-colors font-medium">
                  فراموشی رمز عبور؟
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-purple/25 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4 group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  لطفا صبر کنید...
                </>
              ) : (
                <>
                  {isLogin ? 'ورود به حساب' : 'ایجاد حساب کاربری'}
                  <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <button 
              onClick={() => onNavigate('home')} 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
            >
              <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              بازگشت به خانه
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;