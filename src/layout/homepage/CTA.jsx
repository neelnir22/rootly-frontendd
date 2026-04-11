import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to go root?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of creators who've made the switch. Free to start, powerful at scale.
        </p>
        <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-base flex items-center justify-center gap-2">
          Get started for free <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
