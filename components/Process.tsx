import { processSteps } from '@/lib/content';

export default function Process() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        Process
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        How a project usually goes.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {processSteps.map((step) => (
          <div key={step.num}>
            <div className="font-mono text-[13px] text-[var(--accent)] border border-[var(--border)] w-8 h-8 rounded-full flex items-center justify-center mb-4">
              {step.num}
            </div>
            <h4 className="font-display text-base font-semibold mb-1.5">{step.title}</h4>
            <p className="text-[13.5px] text-[var(--text-dim)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
