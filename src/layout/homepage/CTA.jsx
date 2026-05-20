import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary-indigo to-primary-violet overflow-hidden shadow-2xl shadow-primary-indigo/20 text-center flex flex-col items-center">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-6 relative z-10 tracking-tight">
            Ready to take control of your links?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed relative z-10 font-medium">
            Join thousands of creators who've made the switch. Start building your digital presence today.
          </p>
          <Button 
            onClick={() => navigate("/signup")}
            className="px-10 py-8 bg-white text-primary-indigo hover:bg-slate-50 font-bold rounded-full transition-all duration-300 shadow-xl shadow-black/10 text-lg relative z-10 active:scale-95"
          >
            Create your free Rootly profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
