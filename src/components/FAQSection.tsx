import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Lumina differ from standard digital marketing agencies?',
      a: 'Traditional agencies bill hourly retainers for vanity metrics (clicks, impressions, unweighted leads). Lumina operates like an external growth engineering squad: we build programmatic search infrastructure, implement deterministic Markov attribution, and optimize bid prices algorithmically. Our metrics are directly tied to pipeline velocity and closed-won ARR.',
    },
    {
      q: 'What is your typical engagement structure and contract length?',
      a: 'We work in rapid 90-day execution sprints with defined milestone deliverables (Phase 01 Audit, Phase 02 Infrastructure Sprint, Phase 03 Scaling). We do not lock clients into predatory 12-month retainers. If we do not hit agreed pipeline unit economics in 90 days, you are free to walk with 100% of all ad accounts, creative assets, and tracking infrastructure.',
    },
    {
      q: 'What monthly ad spend bracket do you require to deliver results?',
      a: 'Our algorithmic optimization and multi-channel arbitrage are most effective for B2B software companies spending between $20,000/mo and $350,000/mo across Google Search, LinkedIn ABM, Meta, and Programmatic networks.',
    },
    {
      q: 'Who actually executes on our account?',
      a: 'Zero junior account coordinators or outsourced interns. You work directly with a Senior Growth Architect, an Analytics & Attribution Engineer, and a Senior Conversion Designer who have scaled venture-backed B2B companies from Series A to Series D.',
    },
    {
      q: 'Do you own our ad accounts and customer data?',
      a: 'No. You retain 100% ownership of all ad accounts, tracking pixels, first-party event streams, Google Search Console properties, and creative collateral. All work is built directly inside your company infrastructure.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-borderline bg-paper-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-paper-50 border border-borderline text-[11px] font-mono font-bold uppercase tracking-widest text-accent-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparency & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-charcoal-950">
            Frequently Answered Specifications
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto font-sans leading-relaxed">
            Direct clarity on our engagement models, technical stack, and performance accountability.
          </p>
        </div>

        {/* Brutalist Accordion List */}
        <div className="border border-borderline divide-y divide-borderline bg-paper-50 shadow-subtle">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-paper-100 transition-colors"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-charcoal-950">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 border border-borderline bg-paper-100 flex items-center justify-center text-charcoal-900 shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-accent-600" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed border-t border-borderline/60 bg-paper-100/50 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
