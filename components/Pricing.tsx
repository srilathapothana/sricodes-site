import { pricingTiers } from '@/lib/content';

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        Pricing
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        Straightforward pricing, no surprise invoices.
      </h2>
      <p className="text-[var(--text-dim)] text-base max-w-[560px] mt-3.5">
        Every quote is fixed before work starts. These are starting points, and final price
        depends on scope.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 max-w-[1120px]">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-[var(--surface)] border rounded-[10px] p-[30px_26px] flex flex-col relative ${
              tier.featured ? 'border-[var(--accent)]' : 'border-[var(--border)]'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-[11px] left-[26px] font-mono text-[10px] text-[#0d1117] bg-[var(--accent)] px-2.5 py-[3px] rounded-full tracking-[0.05em]">
                MOST PICKED
              </span>
            )}
            <h3 className="font-display text-base font-semibold text-[var(--text-dim)] mb-2.5">
              {tier.name}
            </h3>
            <div className="font-display text-[2.1rem] font-bold mb-1">{tier.price}</div>
            <div className="text-[13px] text-[var(--text-dim)] mb-5">{tier.description}</div>
            <ul className="mb-6 flex-grow space-y-1.5">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="text-[13.5px] text-[var(--text-dim)] flex gap-2 before:content-['→'] before:text-[var(--accent)]"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 text-[13px] text-[var(--text-dim)] border-l-2 border-[var(--accent-dim)] pl-3.5">
        Rates reflect that I&apos;m early in freelancing and building my client base.
        You&apos;re getting full effort and direct access to the person doing the work, not a
        markup for a middleman.
      </div>
    </section>
  );
}
