import React from 'react';

export const LogoGrid: React.FC = () => {
  const logos = [
    { name: 'SYNTHESIS.IO', category: 'Enterprise LLMOps' },
    { name: 'HYPERPLANE', category: 'Cloud Infrastructure' },
    { name: 'VECTOR_DB', category: 'Realtime Indexing' },
    { name: 'CHRONOS DATA', category: 'Time-Series Platform' },
    { name: 'AUGMENT_AI', category: 'Code Intelligence' },
    { name: 'PRISM METRICS', category: 'FinTech Telemetry' },
  ];

  return (
    <section className="py-12 border-b border-borderline bg-paper-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-borderline">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-charcoal-600">
            <span className="w-1.5 h-1.5 bg-charcoal-900"></span>
            <span>Trusted By Category-Leading B2B Scaleups</span>
          </div>
          <span className="text-[11px] font-mono text-charcoal-500">
            Portfolio Aggregate: &gt; $850M Raised across YC, Sequoia & a16z
          </span>
        </div>

        {/* 6-Column Monochromatic Tabular Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-borderline mt-6 divide-y md:divide-y-0 divide-x divide-borderline bg-paper-100">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="p-6 flex flex-col items-center justify-center text-center group hover:bg-paper-200 transition-colors"
            >
              <span className="font-display font-bold text-sm tracking-tighter text-charcoal-950 group-hover:text-accent-600 transition-colors">
                {logo.name}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-charcoal-500 mt-1">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
