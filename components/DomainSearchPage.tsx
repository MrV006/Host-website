'use client';

import React, { useState } from 'react';
import { Search, Check, X, Loader2, ShoppingCart, Globe, AlertCircle } from 'lucide-react';

interface DomainResult {
  name: string;
  status: 'available' | 'taken';
  price: string;
  tld: string;
}

const DomainSearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResults(null);
    setSearchedTerm(query);

    // Simulate API delay
    setTimeout(() => {
      const tlds = [
        { ext: '.com', price: '۶۰۰,۰۰۰ تومان' },
        { ext: '.ir', price: '۲۰,۰۰۰ تومان' },
        { ext: '.net', price: '۷۵۰,۰۰۰ تومان' },
        { ext: '.org', price: '۵۰۰,۰۰۰ تومان' },
      ];

      const cleanQuery = query.toLowerCase().replace(/[^a-z0-9-]/g, '');

      const mockResults: DomainResult[] = tlds.map(tld => {
        // Random availability logic
        // .ir is more likely to be available for demo purposes
        const isTaken = Math.random() > (tld.ext === '.ir' ? 0.8 : 0.5);
        
        return {
          name: `${cleanQuery}${tld.ext}`,
          tld: tld.ext,
          status: isTaken ? 'taken' : 'available',
          price: tld.price
        };
      });

      setResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-purple/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 mb-6 shadow-2xl shadow-brand-blue/10">
            <Globe className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            جستجوی نام دامنه
          </h1>
          <p className="text-slate-400 text-lg">
            نام برند خود را در دنیای دیجیتال ثبت کنید. همین حالا شروع کنید.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-2 rounded-2xl mb-12 shadow-xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
               <input
                type="text"
                dir="ltr"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="نام دامنه مورد نظر را وارد کنید (مثلا: mywebsite)..."
                className="w-full h-14 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-6 text-lg rounded-xl text-left font-sans"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading || !query.trim()}
              className="h-14 px-8 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/30 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  در حال بررسی...
                </>
              ) : (
                <>
                  جستجو
                  <Search className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Area */}
        {results && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between text-slate-400 px-2 mb-2">
              <span>نتایج برای "{searchedTerm}"</span>
            </div>
            
            {results.map((domain) => (
              <div 
                key={domain.name}
                className={`flex flex-col sm:flex-row items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                  domain.status === 'available' 
                    ? 'bg-slate-900/50 border-green-500/30 hover:border-green-500 shadow-lg shadow-green-900/5' 
                    : 'bg-slate-900/30 border-red-500/10 hover:border-red-500/30 opacity-75'
                }`}
              >
                {/* Left Side: Status Icon & Name */}
                <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border ${
                    domain.status === 'available' 
                      ? 'bg-green-500/10 border-green-500/20 text-green-500' 
                      : 'bg-red-500/10 border-red-500/20 text-red-500'
                  }`}>
                    {domain.status === 'available' ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-white dir-ltr text-left tracking-wide">{domain.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        domain.status === 'available' 
                          ? 'bg-green-500/10 text-green-400' 
                          : 'bg-red-500/10 text-red-400'
                      }`}>
                        {domain.status === 'available' ? 'موجود' : 'ثبت شده'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & Action */}
                <div className="flex items-center gap-4 w-full sm:w-auto justify-end border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                  {domain.status === 'available' ? (
                    <>
                      <span className="text-xl font-bold text-white">{domain.price}</span>
                      <button className="flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-5 py-2.5 rounded-lg font-bold transition-all duration-200 shadow-[0_0_15px_-5px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.6)]">
                        <ShoppingCart className="w-4 h-4" />
                        افزودن به سبد
                      </button>
                    </>
                  ) : (
                    <button 
                      disabled 
                      className="flex items-center gap-2 border border-slate-700 text-slate-500 cursor-not-allowed px-5 py-2.5 rounded-lg font-medium w-full sm:w-auto justify-center"
                    >
                      <AlertCircle className="w-4 h-4" />
                      اطلاعات هویز
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSearchPage;