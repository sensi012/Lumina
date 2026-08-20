import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Building2, Calendar, Target } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cases = [
    {
      company: 'CloudScale.io',
      industry: 'Kubernetes & Observability Infrastructure',
      funding: 'Series B ($35M)',
      primaryMetric: '+$4.2M',
      metricLabel: 'Net New ARR Generated in 90 Days',
      secondaryMetrics: [
        { label: 'CAC Reduction', value: '-38.4%' },
        { label: 'SQL Conversion Lift', value: '+185%' },
        { label: 'Sales Cycle Velocity', value: '42 Days (-28%)' },
      ],
      challenge: 'CloudScale was spending $65k/month on generic Google Search with a punishing $820 CAC, struggling to target enterprise DevOps architects directly.',
      solution: 'Deployed Lumina high-intent competitor displacement clusters, LinkedIn ABM routing tied to tech stack intent, and a high-converting Kubernetes latency benchmark tool.',
      attributionModel: 'Bayesian Markov Multi-Touch',
      timeframe: '90 Days Sprint',
    },
    {
      company: 'DataMesh Analytics',
      industry: 'Realtime Data Warehouse & Reverse ETL',
      funding: 'Series A ($18M)',
      primaryMetric: '3.4x',
      metricLabel: 'Pipeline Multiplier on Same Ad Spend',
      secondaryMetrics: [
        { label: 'Portfolio ROAS', value: '5.2x' },
        { label: 'Organic Search Traffic', value: '+340%' },
        { label: 'Enterprise ACV', value: '$48,000' },
      ],
      challenge: 'Relying solely on outbound SDRs with diminishing returns and zero inbound programmatic search presence.',
      solution: 'Architected 250+ programmatic technical migration pages and automated high-intent search bid arbitrage across 12 data warehouse keywords.',
      attributionModel: 'Algorithmic Removal Effect',
      timeframe: '120 Days Sprint',
    },
    {
      company: 'SynthAI Governance',
      industry: 'Enterprise LLM Security & Compliance',
      funding: 'Seed ($6M) -> Series A',
      primaryMetric: '+210%',
      metricLabel: 'Expansion in Enterprise Qualified Demos',
      secondaryMetrics: [
        { label: 'Payback Velocity', value: '2.8 Months' },
        { label: 'Pipeline Value', value: '$8.6M' },
        { label: 'First-Touch Attribution', value: '99.4% Accurate' },
      ],
      challenge: 'High-friction security form fills resulting in an 88% landing page drop-off rate for Fortune 500 CISO prospects.',
      solution: 'Replaced traditional multi-step demo forms with an instant interactive SOC 2 compliance analyzer, capturing verified corporate emails at 8.4% conversion rate.',
      attributionModel: 'Deterministic First-Party Event Stream',
      timeframe: '60 Days Sprint',
    },
  ];

  const activeCase = cases[activeTab];

  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-borderline bg-paper-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderline">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-paper-100 border border-borderline text-[11px] font-mono font-bold uppercase tracking-widest text-accent-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Economic Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-charcoal-950">
              Deterministic Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md font-sans leading-relaxed">
            Real enterprise case studies with verified attribution data and measurable closed-won pipeline expansion.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-borderline mt-8 divide-y md:divide-y-0 md:divide-x divide-borderline bg-paper-100">
          {cases.map((c, idx) => (
            <button
              key={c.company}
              onClick={() => setActiveTab(idx)}
              className={`p-5 text-left transition-all ${
                activeTab === idx
                  ? 'bg-charcoal-950 text-white shadow-subtle'
                  : 'bg-paper-100 text-charcoal-700 hover:bg-paper-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base">{c.company}</span>
                <span
                  className={`font-mono text-xs font-bold ${
                    activeTab === idx ? 'text-accent-400' : 'text-accent-600'
                  }`}
                >
                  {c.primaryMetric}
                </span>
              </div>
              <span
                className={`text-[11px] font-mono block mt-1 ${
                  activeTab === idx ? 'text-charcoal-400' : 'text-charcoal-500'
                }`}
              >
                {c.industry}
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box (Split Columns) */}
        <div className="border-x border-b border-borderline bg-paper-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Big Metric & Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Callout Card */}
              <div className="p-6 bg-charcoal-950 text-white space-y-2 border border-charcoal-900 shadow-brutal-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-400 font-bold block">
                  Primary Business Impact
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold font-mono text-white tracking-tight">
                  {activeCase.primaryMetric}
                </div>
                <p className="text-xs font-mono text-charcoal-300">
                  {activeCase.metricLabel}
                </p>
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {activeCase.secondaryMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 bg-paper-100 border border-borderline space-y-1"
                  >
                    <span className="text-[9px] font-mono uppercase tracking-wider text-charcoal-500 font-bold block truncate">
                      {m.label}
                    </span>
                    <div className="text-base sm:text-lg font-display font-bold font-mono text-charcoal-950">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono text-charcoal-600">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper-100 border border-borderline">
                  <Building2 className="w-3 h-3 text-charcoal-500" />
                  <span>{activeCase.funding}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper-100 border border-borderline">
                  <Calendar className="w-3 h-3 text-charcoal-500" />
                  <span>{activeCase.timeframe}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-paper-100 border border-borderline">
                  <Target className="w-3 h-3 text-accent-600" />
                  <span>{activeCase.attributionModel}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Problem, Execution & Architecture */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-borderline">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-charcoal-500">
                  01 / The Growth Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                  {activeCase.challenge}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-borderline">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-600">
                  02 / The Engineered Solution
                </span>
                <p className="text-xs sm:text-sm text-charcoal-900 font-medium leading-relaxed font-sans">
                  {activeCase.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-borderline flex items-center justify-between">
                <span className="text-xs font-mono text-charcoal-500">
                  Verified with Salesforce & HubSpot Integration
                </span>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-display uppercase tracking-wider text-charcoal-950 hover:text-accent-600 transition-colors"
                >
                  <span>Replicate This Growth Loop</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
