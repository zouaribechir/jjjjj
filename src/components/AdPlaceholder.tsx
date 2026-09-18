export function AdPlaceholder({
  slot = 'banner',
  className = ''
}: {
  slot?: 'banner' | 'sidebar' | 'inline';
  className?: string;
}) {
  return (
    <div
      className={`w-full border border-dashed border-slate-300 dark:border-[#252B33] rounded-xl bg-slate-100/50 dark:bg-[#12161B]/40 text-slate-500 dark:text-[#A7B0BC] p-4 flex flex-col items-center justify-center text-center transition-colors ${
        slot === 'banner' ? 'min-h-[90px] my-6' : 'min-h-[140px] my-4'
      } ${className}`}
      aria-label="Sponsorship / Partner Reserved Slot"
    >
      <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 dark:text-[#A7B0BC]/70 px-2 py-0.5 rounded bg-slate-200 dark:bg-[#181D23] border border-slate-300 dark:border-[#252B33]">
        Partner Placement
      </span>
      <p className="text-xs text-slate-500/80 dark:text-[#A7B0BC]/60 mt-1.5 font-medium">
        Reserved high-speed sponsorship slot • Fast & tracker-free
      </p>
    </div>
  );
}
