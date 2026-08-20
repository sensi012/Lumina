import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Terminal } from 'lucide-react';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    workEmail: '',
    companyUrl: '',
    monthlySpend: '$25k - $75k',
    primaryGoal: 'Scale Qualified Pipeline',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-20 md:py-28 border-b border-borderline bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Contrast Dark Brutalist Block */}
        <div className="bg-charcoal-950 text-white border-2 border-charcoal-900 p-8 sm:p-12 lg:p-16 shadow-brutal relative overflow-hidden">
          
          {/* Subtle Background Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#272930_1px,transparent_1px),linear-gradient(to_bottom,#272930_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-900 border border-charcoal-800 text-[11px] font-mono font-bold uppercase tracking-widest text-accent-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Zero-Commitment Diagnostic</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                Ready to Scale Your Pipeline with Certainty?
              </h2>

              <p className="text-sm sm:text-base text-charcoal-300 font-sans leading-relaxed">
                Receive a complete 360-degree audit of your ad accounts, attribution models, and conversion funnel. We’ll pinpoint exactly where revenue is leaking and outline your custom 90-day growth sprint.
              </p>

              {/* Guarantees List */}
              <div className="pt-4 border-t border-charcoal-850 space-y-3 font-mono text-xs text-charcoal-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>48-Hour Turnaround by Senior Growth Architects</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>Full NDA & Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>Zero Sales Pitch — Pure Engineering & Data Modeling</span>
                </div>
              </div>

              {/* Direct Booking Alternative */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-400 hover:text-accent-300 underline underline-offset-4"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prefer to schedule a live discovery call directly? Click here</span>
                </button>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-paper-50 text-charcoal-950 p-6 sm:p-8 border border-borderline shadow-brutal">
                
                {submitted ? (
                  <div className="py-8 text-center space-y-4 font-mono animate-fade-in">
                    <div className="w-12 h-12 bg-forest-50 border border-forest-600 text-forest-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-charcoal-950">
                      Audit Request Received
                    </h3>
                    <p className="text-xs text-charcoal-600 font-sans max-w-sm mx-auto">
                      A Senior Growth Partner will review your domain (<strong>{form.companyUrl || form.workEmail}</strong>) and deliver your custom revenue audit within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2 bg-charcoal-950 text-white font-mono text-xs font-bold uppercase"
                      >
                        Submit Another Domain
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-display font-bold text-charcoal-950">
                        Request Your Growth Audit
                      </h3>
                      <p className="text-[11px] text-charcoal-500 font-mono">
                        Direct analysis from our senior engineering team.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider font-bold text-charcoal-800">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="vp.growth@company.com"
                        value={form.workEmail}
                        onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider font-bold text-charcoal-800">
                          Company URL *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="company.com"
                          value={form.companyUrl}
                          onChange={(e) => setForm({ ...form, companyUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider font-bold text-charcoal-800">
                          Monthly Ad Spend
                        </label>
                        <select
                          value={form.monthlySpend}
                          onChange={(e) => setForm({ ...form, monthlySpend: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                        >
                          <option value="< $15k">&lt; $15k / month</option>
                          <option value="$15k - $50k">$15k - $50k / month</option>
                          <option value="$50k - $150k">$50k - $150k / month</option>
                          <option value="$150k+">$150k+ / month (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider font-bold text-charcoal-800">
                        Primary Objective
                      </label>
                      <select
                        value={form.primaryGoal}
                        onChange={(e) => setForm({ ...form, primaryGoal: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                      >
                        <option value="Scale Qualified Pipeline">Scale Qualified Pipeline (High-Intent)</option>
                        <option value="Compress Acquisition CAC">Compress Blended Acquisition CAC</option>
                        <option value="Programmatic SEO Engine">Launch Programmatic SEO Engine</option>
                        <option value="Conversion Rate Overhaul">Complete Landing Page & CRO Overhaul</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-charcoal-950 hover:bg-accent-600 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                      >
                        <span>Dispatch Audit Request</span>
                        <ArrowRight className="w-4 h-4 text-accent-400" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500 pt-1">
                      <span>Strict Data Privacy</span>
                      <span>No Spam Guaranteed</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
