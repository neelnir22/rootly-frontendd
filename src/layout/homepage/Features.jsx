import React from 'react';
import { Palette, BarChart3, Zap, Shield, Globe, Puzzle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 transition-colors flex flex-col h-full">
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-[15px]">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Themes",
      description: "Choose from dozens of premium themes or build your own with our visual editor."
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Track clicks, views, and engagement with real-time analytics dashboards."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Pages load in under 100ms. No bloat, no delays — just pure speed."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "We don't track your visitors or sell your data. Fully compliant and secure."
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Connect your own domain to your Rootly page for a fully branded experience."
    },
    {
      icon: Puzzle,
      title: "Smart Integrations",
      description: "Sync with your favorite tools seamlessly like Figma, Substack and more."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-blue-500 font-semibold tracking-widest text-[11px] uppercase mb-4">FEATURES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need, nothing you don't
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Rootly gives you powerful tools wrapped in a minimal, beautiful interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
