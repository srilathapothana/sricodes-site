'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        FAQ
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        Common questions before you reach out.
      </h2>

      <div className="mt-10 border-t border-[var(--border)]">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="border-b border-[var(--border)]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-5 flex justify-between items-center cursor-pointer font-display text-[15.5px] font-medium text-left bg-transparent border-none text-[var(--text)]"
            >
              <span>{faq.question}</span>
              <span
                className={`font-mono text-[var(--accent)] text-lg transition-transform duration-[250ms] ${
                  openIndex === i ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height,padding-bottom] duration-300 ease-in-out"
              style={{ maxHeight: openIndex === i ? '200px' : '0px' }}
            >
              <p className="text-[14.5px] text-[var(--text-dim)] pb-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
