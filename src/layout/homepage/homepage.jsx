import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';

const HomepageLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
