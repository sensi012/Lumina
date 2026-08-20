import React from 'react';
import { Search, Target, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Paid Media & High-Intent Arbitrage',
      tagline: 'High-LTV B2B Customer Acquisition',
      icon: Target,
      desc: 'We architect and autonomously manage high-intent search campaigns, LinkedIn ABM targeting, and programmatic retargeting networks with continuous bid-price optimization.',
      deliverables: [
        'Google High-Intent & Competitor Search clusters',
        'LinkedIn Enterprise ICP & Account-Based routing',
        'Dynamic ad variant testing with Bayesian removal modeling',
        'Direct CRM revenue attribution & pipeline tracking',
      ],
      kpi: 'Avg. CAC Compression: -38%',
    },
    {
      num: '02',
      title: 'Programmatic SEO & Content Engines',
      tagline: 'Organic Search Authority at Scale',
      icon: Search,
      desc: 'We build automated programmatic page architectures and bottom-of-funnel comparison engines that capture high-intent technical software buyers before competitors.',
      deliverables: [
        'Algorithmic template architecture & schema engineering',
        'Bottom-of-funnel alternative & integration hubs',
        'Core Web Vitals edge caching (<20ms P99 TTFB)',
        'Zero-fluff technical editorial that converts engineers',
      ],
      kpi: 'Avg. Organic Pipeline Lift: +240%',
    },
    {
      num: '03',
      title: 'Conversion Architecture & Telemetry',
      tagline: 'Full-Funnel CRO & Unit Economics',
      icon: Cpu,
      desc: 'We re-engineer landing pages, interactive product sandboxes, and checkout flows to maximize pipeline capture rate without relying on vanity form fills.',
      deliverables: [
        'High-converting brutalist landing page engineering',
        'Interactive unit-economics and ROI calculators',
        'First-party event streaming (zero third-party cookie loss)',
        'Automated multi-variant copy & layout regression testing',
      ],
      kpi: 'Avg. Visit-to-Demo Conversion: 6.4%',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-b border-borderline bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderline">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-paper-50 border border-borderline text-[11px] font-mono font-bold uppercase tracking-widest text-accent-600">
              <span>Core Revenue Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-charcoal-950">
              Engineering-Grade Growth Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md font-sans leading-relaxed">
            We don't sell hourly vanity consulting. We deploy specialized growth infrastructure designed to scale ARR with mathematical predictability.
          </p>
        </div>

        {/* 3-Column Structured Brutalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-borderline mt-8 bg-paper-50 divide-y lg:divide-y-0 lg:divide-x divide-borderline">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                className="group relative p-8 flex flex-col justify-between bg-paper-50 hover:bg-paper-100 transition-all duration-200"
              >
                {/* Accent Top Hairline on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-accent-600 transition-colors" />

                <div className="space-y-6">
                  
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-charcoal-400 group-hover:text-charcoal-950 transition-colors">
                      {srv.num}
                    </span>
                    <div className="w-10 h-10 border border-borderline group-hover:border-charcoal-950 flex items-center justify-center bg-paper-100 group-hover:bg-charcoal-950 text-charcoal-950 group-hover:text-white transition-all shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-charcoal-950 group-hover:text-accent-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                      {srv.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                    {srv.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-borderline space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 font-bold block">
                      Execution Scope:
                    </span>
                    <ul className="space-y-2 text-xs text-charcoal-700">
                      {srv.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Metric Callout */}
                <div className="mt-8 pt-4 border-t border-borderline flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-charcoal-950">{srv.kpi}</span>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-accent-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
