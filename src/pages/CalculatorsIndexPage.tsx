import { useState, useMemo, useEffect } from 'react';
import { useLocation } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CalculatorCard } from '../components/CalculatorCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { SearchBar } from '../components/SearchBar';
import { SeoHead } from '../components/SeoHead';
import { CALCULATORS, CATEGORIES } from '../data/calculators';
import { Category } from '../types';

export function CalculatorsIndexPage() {
  const { search } = useLocation();

  // Detect category from query string if present (e.g. ?cat=social-media or ?cat=YouTube)
  const initialCategory: Category = useMemo(() => {
    const params = new URLSearchParams(search);
    const catParam = params.get('cat');
    if (!catParam) return 'All';
    const found = CATEGORIES.find(
      c => c.toLowerCase().replace(/\s+/g, '-') === catParam.toLowerCase() ||
           c.toLowerCase() === catParam.toLowerCase()
    );
    return found || 'All';
  }, [search]);

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return CALCULATORS;
    return CALCULATORS.filter(
      c => c.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const breadcrumbs = [
    { label: 'Calculators' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <SeoHead
        title="All Creator Calculators – Free Tools for Creators & Influencers"
        description="Browse all 12 free creator calculators for YouTube, TikTok, Instagram, affiliate marketing, video ROI, and creator business metrics."
        canonical="https://creatorcalc.com/calculators"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
          All Creator Calculators
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#A7B0BC] max-w-2xl leading-relaxed">
          Explore all free calculators for income, engagement, growth, and business metrics.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 max-w-md">
        <SearchBar placeholder="Quick filter calculators..." />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <CategoryFilter
          categories={CATEGORIES}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {/* Grid of Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(calc => (
            <CalculatorCard key={calc.id} calc={calc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-[#12161B] border border-slate-200 dark:border-[#252B33]">
          <p className="text-base font-semibold text-slate-900 dark:text-[#F5F7FA]">No calculators found in this category.</p>
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className="mt-3 text-xs font-semibold text-[#7C5CFC] hover:underline"
          >
            Reset to All Categories
          </button>
        </div>
      )}
    </div>
  );
}
