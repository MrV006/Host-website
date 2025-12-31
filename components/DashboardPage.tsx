'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Server, 
  FileText, 
  LifeBuoy, 
  LogOut, 
  Bell, 
  Menu, 
  X, 
  MoreVertical,
  CheckCircle2,
  Clock,
  Shield,
  CreditCard
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { label: 'سرویس‌های فعال', value: '۲', icon: Server, color: 'text-green-400', bg: 'bg-green-400/10' },
    { label: 'فاکتورهای پرداخت نشده', value: '۰', icon: FileText, color: 'text-slate-400', bg: 'bg-slate-400/10' },
    { label: 'تیکت‌های باز', value: '۱', icon: LifeBuoy, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  ];

  const services = [
    { 
      id: 1, 
      name: 'VPS NVMe - 4GB', 
      ip: '192.168.1.5', 
      due: '1403/12/01', 
      status: 'active', 
      icon: Shield 
    },
    { 
      id: 2, 
      name: 'Host Pro - Linux', 
      ip: 'server.host.com', 
      due: '1403/11/15', 
      status: 'pending', 
      icon: Server 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex relative overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-50 w-72 bg-slate-900 border-l border-white/10 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue shadow-lg shadow-brand-purple/20">
              <Server className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              هاست <span className="text-brand-blue">پلاس</span>
            </span>
            <button 
              className="mr-auto lg:hidden text-slate-400 hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20 font-medium transition-all">
              <LayoutDashboard className="w-5 h-5" />
              داشبورد
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all font-medium">
              <Server className="w-5 h-5" />
              سرویس‌های من
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all font-medium">
              <CreditCard className="w-5 h-5" />
              فاکتورها
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all font-medium">
              <LifeBuoy className="w-5 h-5" />
              تیکت‌های پشتیبانی
              <span className="mr-auto bg-orange-500/20 text-orange-400 text-xs py-0.5 px-2 rounded-full border border-orange-500/20">1</span>
            </button>
          </nav>

          {/* User Profile / Logout */}
          <div className="p-4 border-t border-white/10">
            <button 
              onClick={() => onNavigate('home')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium"
            >
              <LogOut className="w-5 h-5" />
              خروج از حساب
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-white">سلام، امیررضا 👋</h2>
              <p className="text-xs text-slate-400 hidden sm:block">به پنل کاربری خود خوش آمدید</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 left-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-800"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue p-0.5">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white">
                AP
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:border-white/20 transition-colors shadow-lg shadow-black/20">
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            {/* Services Table */}
            <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-brand-blue" />
                  سرویس‌های اخیر
                </h3>
                <button className="text-sm text-brand-blue hover:text-brand-neon transition-colors font-medium">
                  مشاهده همه
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-400 text-sm">
                      <th className="px-6 py-4 font-medium">نام سرویس</th>
                      <th className="px-6 py-4 font-medium">آی‌پی آدرس</th>
                      <th className="px-6 py-4 font-medium">تاریخ سررسید</th>
                      <th className="px-6 py-4 font-medium">وضعیت</th>
                      <th className="px-6 py-4 font-medium text-left">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {services.map((service) => (
                      <tr key={service.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                              <service.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-white">{service.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-400 dir-ltr text-right font-mono text-sm">
                          {service.ip}
                        </td>
                        <td className="px-6 py-4 text-slate-400">
                          {service.due}
                        </td>
                        <td className="px-6 py-4">
                          {service.status === 'active' ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                              فعال
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                              در انتظار
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-left">
                          {service.status === 'active' ? (
                            <button className="text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-all">
                              مدیریت
                            </button>
                          ) : (
                            <button className="text-sm font-bold text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg shadow-lg shadow-green-600/20 transition-all">
                              پرداخت
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;