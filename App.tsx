import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import TargetAudience from './components/TargetAudience';
import HowItWorks from './components/HowItWorks';
import Stack from './components/Stack';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LiveNotifications from './components/LiveNotifications';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 antialiased selection:bg-brand-yellow selection:text-brand-navy">
      <Hero />
      <VideoSection />
      <Problem />
      <Mechanism />
      <TargetAudience />
      <Testimonials />
      <Stack />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
      <LiveNotifications />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden z-50">
        <a 
          href="#oferta"
          className="block w-full bg-green-600 text-white text-center font-bold py-3 rounded-lg shadow-lg"
        >
          Quero Acelerar a Leitura (R$ 37)
        </a>
      </div>
    </div>
  );
};

export default App;