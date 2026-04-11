import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center justify-center pt-32 pb-20 px-4 min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mb-8 flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/40 px-4 py-1.5 text-xs text-gray-300 font-medium tracking-wide w-max mx-auto uppercase shadow-sm">
        <span className="text-blue-500">✨</span> Now in public beta
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto z-10">
        One link to <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          rule them all
        </span>
      </h1>
      
      <p className="max-w-2xl text-[1.1rem] md:text-xl text-gray-400 mb-10 mx-auto leading-relaxed z-10">
        Rootly is the modern link-in-bio platform for creators, developers, and brands. Beautiful pages, powerful analytics, zero friction.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 z-10 w-full sm:w-auto">
        <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-base flex items-center justify-center gap-2">
          Create your Rootly <span>→</span>
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-gray-800 border border-gray-700 text-white font-medium rounded-full transition-all duration-200 text-base">
          See examples
        </button>
      </div>
        
      
    </section>
  );
};

export default Hero;
