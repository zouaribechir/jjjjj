import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndexes(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full my-8">
      <h2 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] mb-4 flex items-center gap-2">
        <span>{title}</span>
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className="border border-slate-200 dark:border-[#252B33] rounded-xl bg-white dark:bg-[#12161B] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-slate-900 dark:text-[#F5F7FA] hover:text-[#7C5CFC] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 dark:text-[#A7B0BC] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#7C5CFC]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-[#A7B0BC] leading-relaxed border-t border-slate-200 dark:border-[#252B33]/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
