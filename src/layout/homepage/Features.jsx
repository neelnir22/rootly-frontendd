import React from 'react';
import { Palette, BarChart3, Zap, Shield, Globe, Puzzle, Share2, Cloud, MousePointer2, Smartphone } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-6 tracking-tight">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-indigo to-primary-violet">
              own your online presence
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Rootly gives you powerful tools wrapped in a minimal, beautiful interface. Designed for creators, built for speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Card 1: Large - Centralized Profiles */}
          <div className="md:col-span-2 md:row-span-2 group relative p-8 rounded-[2rem] bg-card border border-border hover:border-primary-indigo/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-indigo/5">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-primary-indigo/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-6 h-6 text-primary-indigo" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Centralized Profiles</h3>
              <p className="text-muted-foreground max-w-sm">
                Create a beautiful, single link that houses everything you do. One place for your audience to find all your content.
              </p>
              
              <div className="mt-auto pt-8 flex justify-center">
                <div className="w-64 h-48 bg-muted rounded-t-3xl border-x border-t border-border p-4 relative overflow-hidden group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-primary-indigo/20 mx-auto mb-4"></div>
                  <div className="w-3/4 h-2 bg-primary-indigo/10 rounded-full mx-auto mb-2"></div>
                  <div className="w-1/2 h-2 bg-primary-indigo/10 rounded-full mx-auto mb-6"></div>
                  <div className="space-y-2">
                    <div className="w-full h-8 bg-card rounded-xl border border-border"></div>
                    <div className="w-full h-8 bg-card rounded-xl border border-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Medium - Custom URL Shortening */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border hover:border-primary-indigo/30 transition-all duration-500 overflow-hidden shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary-violet/10 flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-primary-violet" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">Custom URLs</h3>
            <p className="text-muted-foreground text-sm">
              Turn long, ugly links into clean, branded ones that people actually want to click.
            </p>
            <div className="mt-6 p-3 bg-muted rounded-xl border border-border group-hover:bg-primary-violet/5 transition-colors">
              <div className="text-[10px] text-muted-foreground mb-1 truncate">rootly.com/deals-2024-summer-sale</div>
              <div className="text-sm font-bold text-primary-violet">rootly.com/summer</div>
            </div>
          </div>

          {/* Card 3: Medium - Data Portability */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border hover:border-accent-teal/30 transition-all duration-500 overflow-hidden shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6 text-accent-teal" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">Data Portability</h3>
            <p className="text-muted-foreground text-sm">
              Your data, your rules. Export your links and analytics anytime. No lock-in, ever.
            </p>
          </div>

          {/* Card 4: Large - Real-time Analytics */}
          <div className="md:col-span-3 group relative p-8 rounded-[2rem] bg-card border border-border hover:border-primary-indigo/30 transition-all duration-500 overflow-hidden shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl bg-primary-indigo/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary-indigo" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Understand exactly who is clicking your links. Track geography, referrers, and device types in real-time with our advanced dashboard.
              </p>
            </div>
            <div className="flex-1 w-full h-48 bg-muted rounded-2xl border border-border p-6 flex items-end gap-2 group-hover:bg-primary-indigo/5 transition-colors">
              {[40, 70, 45, 90, 65, 80, 50, 95, 60, 75].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary-indigo/20 rounded-t-sm group-hover:bg-primary-indigo/40 transition-all duration-500" 
                  style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
