import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { CALCULATORS } from '../data/calculators';
import { CalculatorMeta } from '../types';
import { useRouter } from '../context/RouterContext';
import { Icon } from './Icon';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  onSelect?: () => void;
}

export function SearchBar({
  placeholder = 'Search a calculator...',
  className = '',
  autoFocus = false,
  onSelect
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CalculatorMeta[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = CALCULATORS.filter(calc => 
      calc.name.toLowerCase().includes(q) ||
      calc.description.toLowerCase().includes(q) ||
      calc.category.toLowerCase().includes(q) ||
      calc.keywords.some(k => k.toLowerCase().includes(q))
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (calc: CalculatorMeta) => {
    setIsOpen(false);
    setQuery('');
    if (onSelect) onSelect();
    navigate(calc.slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-slate-400 dark:text-[#A7B0BC] pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-3 text-base rounded-xl bg-white dark:bg-[#12161B] text-slate-900 dark:text-[#F5F7FA] placeholder-slate-400 dark:placeholder-[#A7B0BC] border border-slate-200 dark:border-[#252B33] focus:border-[#7C5CFC] focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 transition-all shadow-sm"
          aria-label="Search calculators"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute right-3 p-1 text-slate-400 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] rounded-md transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] rounded-xl shadow-2xl z-50 overflow-hidden max-h-[380px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-1.5 text-xs font-semibold text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider">
                Matching Calculators ({results.length})
              </div>
              {results.map((calc, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={calc.id}
                    type="button"
                    onClick={() => handleSelect(calc)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-slate-100 dark:bg-[#181D23] text-slate-900 dark:text-white'
                        : 'text-slate-900 dark:text-[#F5F7FA] hover:bg-slate-50 dark:hover:bg-[#181D23]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-[#7C5CFC] shrink-0">
                        <Icon name={calc.icon} className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-sm font-semibold text-slate-900 dark:text-[#F5F7FA] truncate">
                          {calc.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-[#A7B0BC] truncate mt-0.5">
                          {calc.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-slate-600 dark:text-[#A7B0BC]">
                        {calc.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-[#A7B0BC]" />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-500 dark:text-[#A7B0BC]">
              <p className="text-sm">No calculators match &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 dark:text-[#A7B0BC]/70 mt-1">
                Try searching for &ldquo;rpm&rdquo;, &ldquo;engagement&rdquo;, &ldquo;sponsorship&rdquo;, or &ldquo;profit&rdquo;.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function GlobalSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33] rounded-2xl shadow-2xl p-4 overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-[#252B33]">
          <span className="text-xs font-medium text-slate-500 dark:text-[#A7B0BC] uppercase tracking-wider flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#7C5CFC]" /> Quick Search
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] rounded-md transition-colors"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <SearchBar autoFocus onSelect={onClose} placeholder="Type a calculator name or metric..." />
        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-[#252B33] flex items-center justify-between text-[11px] text-slate-500 dark:text-[#A7B0BC]">
          <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">↓</kbd></span>
          <span className="flex items-center gap-1">Select: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] flex items-center gap-0.5"><CornerDownLeft className="w-3 h-3" /> Enter</kbd></span>
          <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33]">Esc</kbd></span>
        </div>
      </div>
    </div>
  );
}
