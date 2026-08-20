import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoGrid } from './components/LogoGrid';
import { ServicesGrid } from './components/ServicesGrid';
import { CaseStudies } from './components/CaseStudies';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { BookCallModal } from './components/BookCallModal';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenAudit = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-paper-100 text-charcoal-900 selection:bg-accent-600 selection:text-white relative">
      
      {/* 2px Structural Top Line */}
      <div className="h-1 w-full bg-accent-600 fixed top-0 left-0 right-0 z-50"></div>

      {/* Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Sections Flow */}
      <main>
        <Hero onOpenAudit={handleOpenAudit} />
        <LogoGrid />
        <ServicesGrid />
        <CaseStudies />
        <ProcessSection />
        <FAQSection />
        <CallToAction onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discovery Booking Modal */}
      <BookCallModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
};

export default App;
