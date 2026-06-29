import { services } from '@/lib/content';

export default function Services() {
  return (
    <section id="services" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        What I do
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        Services built around what clients actually ask for.
      </h2>
      <p className="text-[var(--text-dim)] text-base max-w-[560px] mt-3.5">
        Whether it&apos;s a brand-new site, a tricky bug, or help finishing a student project,
        here&apos;s where I can help.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--border)] mt-12 border border-[var(--border)] rounded-[10px] overflow-hidden">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[var(--surface)] p-8 hover:bg-[var(--surface-2)] transition-colors"
          >
            <div className="w-[38px] h-[38px] rounded-lg bg-[rgba(255,138,61,0.1)] border border-[rgba(255,138,61,0.25)] flex items-center justify-center text-[17px] mb-[18px]">
              {service.icon}
            </div>
            <h3 className="font-display text-[17px] font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-[var(--text-dim)] leading-[1.6]">
              {service.description}
            </p>
            <span className="inline-block mt-3.5 font-mono text-[11.5px] text-[var(--accent)]">
              {service.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
