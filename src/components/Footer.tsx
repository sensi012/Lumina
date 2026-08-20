import React from 'react';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper-50 border-t border-borderline py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-borderline">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-charcoal-950 flex items-center justify-center text-white font-mono font-bold text-xs shadow-brutal-sm">
                <Terminal className="w-3.5 h-3.5 text-accent-500" />
              </div>
              <span className="font-display font-bold text-base tracking-tighter text-charcoal-950">
                LUMINA / GROWTH
              </span>
            </div>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed max-w-sm">
              Engineering-grade growth marketing, programmatic search infrastructure, and multi-touch attribution architecture for B2B software companies.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 border border-borderline flex items-center justify-center text-charcoal-600 hover:text-charcoal-950 hover:bg-paper-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-borderline flex items-center justify-center text-charcoal-600 hover:text-charcoal-950 hover:bg-paper-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-borderline flex items-center justify-center text-charcoal-600 hover:text-charcoal-950 hover:bg-paper-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-charcoal-950 block">
                Disciplines
              </span>
              <ul className="space-y-2 text-xs text-charcoal-600 font-sans">
                <li><a href="#services" className="hover:text-charcoal-950 transition-colors">Paid Search Arbitrage</a></li>
                <li><a href="#services" className="hover:text-charcoal-950 transition-colors">LinkedIn Enterprise ABM</a></li>
                <li><a href="#services" className="hover:text-charcoal-950 transition-colors">Programmatic SEO</a></li>
                <li><a href="#services" className="hover:text-charcoal-950 transition-colors">Conversion Architecture</a></li>
                <li><a href="#services" className="hover:text-charcoal-950 transition-colors">First-Party Telemetry</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-charcoal-950 block">
                Case Studies
              </span>
              <ul className="space-y-2 text-xs text-charcoal-600 font-sans">
                <li><a href="#case-studies" className="hover:text-charcoal-950 transition-colors">CloudScale (+$4.2M ARR)</a></li>
                <li><a href="#case-studies" className="hover:text-charcoal-950 transition-colors">DataMesh (3.4x Pipeline)</a></li>
                <li><a href="#case-studies" className="hover:text-charcoal-950 transition-colors">SynthAI (+210% SQLs)</a></li>
                <li><a href="#case-studies" className="hover:text-charcoal-950 transition-colors">Enterprise B2B Index</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-charcoal-950 block">
                Offices
              </span>
              <ul className="space-y-2 text-xs text-charcoal-600 font-mono">
                <li>San Francisco, CA</li>
                <li>New York, NY</li>
                <li>London, UK</li>
                <li className="pt-2 text-forest-700 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                  <span>Telemetry Nominal</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <div>
            © {new Date().getFullYear()} LUMINA GROWTH PARTNERS LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-charcoal-950 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-950 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-charcoal-950 transition-colors">Security Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
