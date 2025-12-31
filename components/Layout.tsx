import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage }) => {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark font-sans text-slate-100 selection:bg-brand-purple selection:text-white">
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />
      <main className="flex-grow flex flex-col relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[100px]" />
             <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
        </div>
        
        <div className="relative z-10 w-full">
            {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;