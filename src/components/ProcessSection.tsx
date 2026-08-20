import React from 'react';
import { CheckCircle2, Clock, GitCommit, Layers, Zap } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Full-Funnel Diagnostic & Leakage Audit',
      timeline: 'Days 1 – 7',
      icon: Layers,
      summary: 'We plug directly into your CRM, ad networks, and web analytics to uncover where spend is wasted and model exact acquisition ceilings.',
      deliverables: [
        'Deterministic Markov-chain multi-touch attribution baseline',
        'Competitor search keyword & paid bidding cluster dissection',
        'Landing page friction analysis and conversion leak diagnostics',
        '90-Day ARR expansion model with bounded CAC thresholds',
      ],
    },
    {
      num: '02',
      title: 'High-Velocity Infrastructure Sprint',
      timeline: 'Days 8 – 21',
      icon: Zap,
      summary: 'We engineer, deploy, and launch production-grade acquisition funnels, high-intent ad groups, and programmatic search assets.',
      deliverables: [
        'High-intent B2B search campaigns with exact negative matching',
        'LinkedIn ABM account lists mapped to verified job roles & intent',
        'High-converting brutalist landing pages with sub-30ms load times',
        'First-party server-side event tracking (zero attribution loss)',
      ],
    },
    {
      num: '03',
      title: 'Algorithmic Scaling & Loop Consolidation',
      timeline: 'Days 22 + Continuous',
      icon: GitCommit,
      summary: 'We continuously shift budget into highest-converting micro-cohorts and scale ad spend while strictly protecting blended CAC.',
      deliverables: [
        'Daily Bayesian arbitrage shifting capital to top-performing cohorts',
        'Automated multi-variant copy and layout regression testing',
        'Weekly live pipeline reports tied to closed-won revenue',
        'Continuous expansion into net-new high-intent search clusters',
      ],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 border-b border-borderline bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderline">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-paper-50 border border-borderline text-[11px] font-mono font-bold uppercase tracking-widest text-accent-600">
              <Clock className="w-3.5 h-3.5" />
              <span>Sprint Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-charcoal-950">
              The 3-Phase Execution Engine
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md font-sans leading-relaxed">
            From initial telemetry audit to autonomous ARR compounding: our structured roadmap ensures speed, precision, and zero wasted capital.
          </p>
        </div>

        {/* 3 Steps Horizontal Brutalist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-borderline mt-8 bg-paper-50 divide-y lg:divide-y-0 lg:divide-x divide-borderline">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 space-y-6 flex flex-col justify-between hover:bg-paper-100 transition-colors"
              >
                <div className="space-y-6">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-5xl font-mono text-charcoal-300">
                      {step.num}
                    </span>
                    <div className="px-2.5 py-1 bg-charcoal-950 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-brutal-sm">
                      <Icon className="w-3.5 h-3.5 text-accent-400" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-charcoal-950">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-borderline space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 font-bold block">
                      Phase Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-charcoal-700">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-4 border-t border-borderline flex items-center justify-between text-[11px] font-mono text-charcoal-500">
                  <span>Guaranteed SLA</span>
                  <span className="text-charcoal-900 font-bold">100% On-Time Delivery</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
