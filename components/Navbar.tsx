import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navItems: NavItem[] = [
  { label: 'خانه', href: 'home' },
  { label: 'هاست اشتراکی', href: 'shared' }, 
  { label: 'سرور مجازی', href: 'vps' },
  { label: 'جستجوی دامنه', href: 'domains' },
  { label: 'درباره ما', href: 'about' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === 'domains') {
      onNavigate('domains');
    } else {
      onNavigate('home');
    }
  };

  const handleLoginClick = () => {
    setIsOpen(false);
    onNavigate('login');
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex flex-shrink-0 items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue">
              <Server className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              هاست
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    (currentPage === 'domains' && item.href === 'domains') || (currentPage === 'home' && item.href === 'home')
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleLoginClick}
                className={`text-sm font-medium transition-colors ${currentPage === 'login' ? 'text-brand-blue' : 'text-slate-300 hover:text-white'}`}
              >
                ورود
              </button>
              <button 
                onClick={() => handleLoginClick()}
                className="rounded-full bg-gradient-to-r from-brand-purple to-brand-blue px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition-transform hover:scale-105 hover:shadow-brand-purple/40"
              >
                شروع کنید
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span className="sr-only">باز کردن منو</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                    (currentPage === 'domains' && item.href === 'domains') || (currentPage === 'home' && item.href === 'home')
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="border-t border-white/10 pb-4 pt-4">
            <div className="flex items-center px-5 gap-4">
              <button 
                onClick={handleLoginClick}
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
              >
                ورود
              </button>
              <button 
                onClick={handleLoginClick}
                className="w-full rounded-md bg-brand-purple px-4 py-2 text-sm font-medium text-white hover:bg-brand-purple/90"
              >
                شروع کنید
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;