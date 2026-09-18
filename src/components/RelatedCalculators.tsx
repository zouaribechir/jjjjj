import { CALCULATORS } from '../data/calculators';
import { CalculatorCard } from './CalculatorCard';

export function RelatedCalculators({ slugs, currentSlug }: { slugs: string[]; currentSlug?: string }) {
  const related = CALCULATORS.filter(c => slugs.includes(c.slug) && c.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <section className="w-full my-10 pt-8 border-t border-slate-200 dark:border-[#252B33]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA]">Related Calculators</h2>
          <p className="text-xs text-slate-600 dark:text-[#A7B0BC] mt-1">Explore other relevant tools for your creator workflow.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {related.map(calc => (
          <CalculatorCard key={calc.id} calc={calc} />
        ))}
      </div>
    </section>
  );
}
