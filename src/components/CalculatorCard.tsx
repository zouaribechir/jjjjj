import { Link } from '../context/RouterContext';
import { CalculatorMeta } from '../types';
import { Icon } from './Icon';
import { ArrowUpRight } from 'lucide-react';

export function CalculatorCard({ calc }: { calc: CalculatorMeta }) {
  return (
    <Link
      href={calc.slug}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#12161B] hover:bg-slate-50 dark:hover:bg-[#181D23] border border-slate-200 dark:border-[#252B33] hover:border-[#7C5CFC]/40 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-[#7C5CFC]/5"
    >
      <div>
        {/* Top: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#181D23] group-hover:bg-[#7C5CFC]/15 border border-slate-200 dark:border-[#252B33] group-hover:border-[#7C5CFC]/30 flex items-center justify-center text-[#7C5CFC] transition-colors">
            <Icon name={calc.icon} className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#181D23] border border-slate-200 dark:border-[#252B33] text-slate-500 dark:text-[#A7B0BC] group-hover:text-slate-900 dark:group-hover:text-[#F5F7FA] transition-colors">
            {calc.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors mb-2">
          {calc.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-[#A7B0BC] leading-relaxed line-clamp-2">
          {calc.description}
        </p>
      </div>

      {/* Card Action Link */}
      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-[#252B33]/60 flex items-center justify-between text-xs font-semibold text-[#7C5CFC] group-hover:text-[#6847F5]">
        <span>Open Calculator</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
