import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selected: Category;
  onChange: (cat: Category) => void;
  className?: string;
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
  className = ''
}: CategoryFilterProps) {
  return (
    <div className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none ${className}`}>
      {categories.map((cat) => {
        const isSelected = selected.toLowerCase() === cat.toLowerCase();
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
              isSelected
                ? 'bg-[#7C5CFC] text-white shadow-md shadow-[#7C5CFC]/25'
                : 'bg-white dark:bg-[#12161B] text-slate-600 dark:text-[#A7B0BC] hover:text-slate-900 dark:hover:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
