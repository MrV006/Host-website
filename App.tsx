import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import DomainSearchPage from './components/DomainSearchPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { Zap, Globe, Shield } from 'lucide-react';

// Simplified Stats component for Home Page
const Stats = () => {
  return (
    <section className="border-t border-white/10 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-brand-blue mb-4">
            <Zap className="h-6 w-6" />
          </div>
          <dt className="text-3xl font-bold text-white">۹۹.۹۹٪</dt>
          <dd className="mt-1 text-sm text-slate-400">تضمین آپتایم</dd>
        </div>
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-brand-purple mb-4">
            <Globe className="h-6 w-6" />
          </div>
          <dt className="text-3xl font-bold text-white">۱۲+</dt>
          <dd className="mt-1 text-sm text-slate-400">دیتاسنتر جهانی</dd>
        </div>
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <dt className="text-3xl font-bold text-white">۲۴/۷</dt>
          <dd className="mt-1 text-sm text-slate-400">پشتیبانی تخصصی</dd>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // If dashboard is active, render it without the standard website Layout (Navbar/Footer)
  if (currentPage === 'dashboard') {
    return <DashboardPage onNavigate={setCurrentPage} />;
  }

  // Helper to render public pages
  const renderPublicContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <Pricing />
            <Stats />
          </>
        );
      case 'domains':
        return <DomainSearchPage />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Pricing />
            <Stats />
          </>
        );
    }
  };

  return (
    <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
      {renderPublicContent()}
    </Layout>
  );
}

export default App;