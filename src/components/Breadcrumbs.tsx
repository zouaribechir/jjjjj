import { Link } from '../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center space-x-2 text-xs text-slate-500 dark:text-[#A7B0BC] mb-4 flex-wrap">
      <Link href="/" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-[#252B33]" />
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 dark:text-[#F5F7FA] font-medium" aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
