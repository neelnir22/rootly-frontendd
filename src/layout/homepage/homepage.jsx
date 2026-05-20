import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import SocialProof from "./SocialProof";
import CTA from "./CTA";
import Footer from "./Footer";

const HomepageLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary-indigo/30 selection:text-foreground">
      <Hero />
      <SocialProof />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
