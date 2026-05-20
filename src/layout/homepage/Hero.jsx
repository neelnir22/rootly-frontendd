import React, { useState } from "react";
import { useCreateShortLink } from "@/authentication/useCreateShortLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Zap, Shield, Globe } from "lucide-react";
import toast from "react-hot-toast";

const Hero = () => {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const { generateshortlink, data, isPending } = useCreateShortLink();

  const handleShorten = (e) => {
    e.preventDefault();
    if (!link) {
      toast.error("Please enter a link");
      return;
    }
    generateshortlink(link);
  };

  const handleCopy = () => {
    if (data?.result) {
      navigator.clipboard.writeText(data.result);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary-indigo/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-violet/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-primary-indigo text-xs font-semibold mb-6 animate-fade-in">
          <Zap size={14} />
          <span>The next-gen link management platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight text-foreground mb-6 leading-[1.1] animate-fade-in-up">
          One Link. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-indigo to-primary-violet">
            Infinite Connections.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          The ultimate platform to centralize your personal links, create custom
          URLs, and retain complete data portability. Fast, secure, and
          beautiful.
        </p>

        <div className="max-w-2xl mx-auto w-full mb-12 animate-fade-in-up animation-delay-400">
          <form
            onSubmit={handleShorten}
            className="relative group p-2 bg-card border border-border rounded-2xl md:rounded-full shadow-2xl shadow-primary-indigo/10 flex flex-col md:flex-row items-center gap-2 focus-within:ring-2 focus-within:ring-primary-indigo/50 transition-all duration-300"
          >
            <div className="flex-1 w-full px-4 flex items-center gap-3">
              <Globe className="text-muted-foreground w-5 h-5" />
              <input
                type="url"
                placeholder="Paste your long link here..."
                className="w-full py-3 bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-primary-indigo to-primary-violet text-white rounded-xl md:rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary-indigo/25 active:scale-95"
            >
              {isPending ? "Shortening..." : "Shorten"}
            </Button>
          </form>

          {data?.result && (
            <div className="mt-6 p-4 bg-accent-teal/10 border border-accent-teal/20 rounded-2xl flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 bg-accent-teal rounded-lg flex items-center justify-center shrink-0">
                  <Check className="text-white w-5 h-5" />
                </div>
                <span className="font-mono text-accent-teal truncate font-medium">
                  {data.result}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="hover:bg-accent-teal/20 text-accent-teal shrink-0 gap-2"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Shield size={16} />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Zap size={16} />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Globe size={16} />
            <span>Custom Domains</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
