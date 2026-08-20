import React, { useState } from 'react';
import { X, Clock, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

interface BookCallModalProps {
  open: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ open, onClose }) => {
  const [step, setStep] = useState<'slot' | 'info' | 'confirmed'>('slot');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    spend: '$25k - $75k',
  });

  if (!open) return null;

  const timeSlots = [
    'Tomorrow, 10:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Tomorrow, 4:30 PM EST',
    'Friday, 11:00 AM EST',
    'Friday, 1:30 PM EST',
    'Friday, 3:00 PM EST',
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('slot');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-paper-50 border-2 border-charcoal-950 shadow-brutal p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border border-borderline hover:border-charcoal-950 text-charcoal-600 hover:text-charcoal-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-charcoal-950 flex items-center justify-center text-accent-500 font-mono text-xs">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900">
            Discovery Session
          </span>
        </div>

        <h3 className="text-2xl font-display font-bold text-charcoal-950">
          Book a 30-Min Growth Diagnostic
        </h3>
        <p className="text-xs text-charcoal-600 font-sans mt-1">
          Review your current unit economics, acquisition channels, and attribution bottlenecks with a Principal Growth Architect.
        </p>

        {/* Content based on Step */}
        {step === 'slot' && (
          <div className="mt-6 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-charcoal-800 block">
              1. Select a Diagnostic Time Slot
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedDate(slot)}
                  className={`p-3 text-left border transition-all flex items-center justify-between ${
                    selectedDate === slot
                      ? 'border-charcoal-950 bg-charcoal-950 text-white font-bold shadow-brutal-sm'
                      : 'border-borderline bg-paper-100 text-charcoal-800 hover:border-charcoal-600'
                  }`}
                >
                  <span>{slot}</span>
                  {selectedDate === slot && <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-borderline flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-charcoal-500">
                <Clock className="w-3.5 h-3.5 text-accent-600" />
                <span>30 Min Video Conference</span>
              </div>
              <button
                onClick={() => setStep('info')}
                className="px-5 py-2.5 bg-charcoal-950 hover:bg-accent-600 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-brutal-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-400" />
              </button>
            </div>
          </div>
        )}

        {step === 'info' && (
          <form onSubmit={handleConfirm} className="mt-6 space-y-4 font-sans text-xs">
            <div className="p-3 bg-paper-200 border border-borderline font-mono text-[11px] text-charcoal-800 flex items-center justify-between">
              <span>Selected: <strong>{selectedDate}</strong></span>
              <button
                type="button"
                onClick={() => setStep('slot')}
                className="text-accent-600 font-bold underline"
              >
                Change
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase font-bold text-charcoal-800">
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Alex Mercer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase font-bold text-charcoal-800">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase font-bold text-charcoal-800">
                  Company Domain *
                </label>
                <input
                  required
                  type="text"
                  placeholder="company.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase font-bold text-charcoal-800">
                Current Monthly Paid Spend
              </label>
              <select
                value={formData.spend}
                onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-paper-100 border border-borderline text-charcoal-950 focus:outline-none focus:border-charcoal-950 font-mono text-xs"
              >
                <option value="< $15k">&lt; $15k / mo</option>
                <option value="$15k - $50k">$15k - $50k / mo</option>
                <option value="$50k - $150k">$50k - $150k / mo</option>
                <option value="$150k+">$150k+ / mo (Enterprise Scale)</option>
              </select>
            </div>

            <div className="pt-4 border-t border-borderline flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-charcoal-500">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                <span>NDA Protected</span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-charcoal-950 hover:bg-accent-600 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-brutal-sm transition-all"
              >
                <span>Confirm Booking</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-400" />
              </button>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="mt-6 py-6 text-center space-y-4 font-mono animate-fade-in">
            <div className="w-12 h-12 bg-forest-50 border border-forest-600 text-forest-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-display font-bold text-charcoal-950">
              Diagnostic Session Confirmed
            </h4>
            <p className="text-xs text-charcoal-600 font-sans max-w-sm mx-auto">
              Calendar invite and Google Meet link have been dispatched to <strong>{formData.email}</strong> for <strong>{selectedDate}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-charcoal-950 text-white font-mono text-xs font-bold uppercase shadow-brutal-sm"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
