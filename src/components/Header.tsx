import { useState, useEffect } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { ThemeToggle } from './ThemeToggle';
import { GlobalSearchModal } from './SearchBar';
import { Calculator, Search, Menu, X, ArrowRight } from 'lucide-react';

export function Header() {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'TikTok', href: '/tiktok' },
    { label: 'Instagram', href: '/instagram' },
    { label: 'Business', href: '/business' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-[#252B33] bg-white/90 dark:bg-[#0B0D10]/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#6847F5] flex items-center justify-center text-white shadow-md shadow-[#7C5CFC]/20 group-hover:scale-105 transition-transform duration-200">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                CREATOR<span className="text-[#7C5CFC]">CALC</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 dark:text-[#F5F7FA] bg-slate-100 dark:bg-[#181D23] font-semibold border border-slate-200 dark:border-[#252B33]'
                      : 'text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] hover:bg-slate-50 dark:hover:bg-[#12161B]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick search button */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#12161B] text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] border border-slate-200 dark:border-[#252B33] hover:border-[#7C5CFC]/50 text-xs font-medium transition-all"
              aria-label="Search calculators"
            >
              <Search className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span className="hidden lg:inline">Search calculators...</span>
              <span className="lg:hidden">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#181D23] border border-slate-300 dark:border-[#252B33] text-[10px] text-slate-600 dark:text-[#A7B0BC]">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Primary CTA */}
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#6847F5] shadow-sm shadow-[#7C5CFC]/25 transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              <span>Explore Calculators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger & search triggers */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] rounded-lg bg-slate-100 dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] rounded-lg bg-slate-100 dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-slate-200 dark:border-[#252B33] bg-white dark:bg-[#12161B] px-4 pt-3 pb-5 space-y-1.5 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-[#181D23] text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-[#252B33]'
                      : 'text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] hover:bg-slate-50 dark:hover:bg-[#181D23]/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-[#252B33]">
              <Link
                href="/calculators"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#6847F5]"
              >
                <span>Explore All Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
