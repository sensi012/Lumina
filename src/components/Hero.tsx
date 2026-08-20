import React from 'react';
import { ArrowRight, ChevronRight, TrendingUp, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const proofMetrics = [
    { label: 'Pipeline Generated', value: '$142M+', sub: 'Verified CRM attribution' },
    { label: 'Average Blended ROAS', value: '3.8x', sub: 'Across 5 search & paid channels' },
    { label: 'B2B Tech Scaleups', value: '48+', sub: 'Series A through Pre-IPO' },
    { label: 'Average CAC Reduction', value: '-34%', sub: 'Through unit economic arbitrage' },
  ];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-borderline bg-paper-100 relative overflow-hidden">
      
      {/* Subtle Structural 1px Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4E4E8_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-50 border border-borderline text-charcoal-900 font-mono text-[11px] font-bold uppercase tracking-widest mb-6 shadow-subtle">
          <span className="w-2 h-2 rounded-full bg-accent-600 animate-pulse"></span>
          <span>Growth Marketing & Revenue Engineering</span>
        </div>

        {/* Main Brutalist Headline */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-charcoal-950 leading-[1.05]">
            We Scale B2B Software Companies by{' '}
            <span className="inline-block relative text-charcoal-950 underline decoration-accent-600 decoration-4 underline-offset-8">
              3x.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-charcoal-600 max-w-3xl leading-relaxed font-sans font-normal">
            We replace bloated agency retainers with deterministic pipeline engineering: programmatic search infrastructure, algorithmically optimized paid media, and conversion architecture for high-velocity software teams.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 bg-charcoal-950 hover:bg-accent-600 text-white font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span>Audit Your Growth Funnel</span>
              <ArrowRight className="w-4 h-4 text-accent-400" />
            </button>

            <a
              href="#case-studies"
              className="px-6 py-3.5 bg-paper-50 hover:bg-paper-200 border border-charcoal-950 text-charcoal-950 font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-brutal-sm"
            >
              <span>Explore Client Case Studies</span>
              <ChevronRight className="w-4 h-4 text-charcoal-600" />
            </a>
          </div>

          {/* Guarantees */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-charcoal-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Full First-Party Data Isolation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-accent-600" />
              <span>2-Week Sprint Deployment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-charcoal-900" />
              <span>Attribution Tied to Closed-Won ARR</span>
            </div>
          </div>
        </div>

        {/* Real Metrics / Proof Ticker Strip */}
        <div className="mt-16 pt-8 border-t-2 border-charcoal-950 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-paper-50 p-6 border border-borderline shadow-subtle">
          {proofMetrics.map((item, idx) => (
            <div
              key={item.label}
              className={`space-y-1 ${idx !== 0 ? 'lg:pl-6 lg:border-l lg:border-borderline' : ''}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 font-bold block">
                {item.label}
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold font-mono text-charcoal-950 flex items-baseline gap-1">
                {item.value}
                <TrendingUp className="w-4 h-4 text-accent-600 inline" />
              </div>
              <p className="text-[11px] text-charcoal-600 font-sans">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
