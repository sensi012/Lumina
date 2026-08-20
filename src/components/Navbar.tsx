import React, { useState } from 'react';
import { ArrowRight, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper-100/95 backdrop-blur-sm border-b border-borderline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Sharp Typographic Logo */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-none bg-charcoal-950 flex items-center justify-center text-white font-mono font-bold text-sm shadow-brutal-sm transition-transform group-hover:-translate-y-0.5">
                <Terminal className="w-4 h-4 text-accent-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tighter text-charcoal-950 leading-none">
                  LUMINA
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-500 font-semibold mt-0.5">
                  Growth Partners
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-700 hover:text-charcoal-950 hover:bg-paper-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-charcoal-950 hover:bg-accent-600 text-white text-xs font-bold uppercase tracking-wider shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal-900 hover:bg-paper-200 border border-borderline"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderline bg-paper-100 px-4 pt-3 pb-5 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider text-charcoal-800 hover:bg-paper-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-charcoal-950 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-brutal-sm"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
