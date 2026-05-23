import React from 'react';
import { useGetAllUserShortLinks } from "@/authentication/useGetAllUserShortLinks";
import { Link2, Copy, ExternalLink, BarChart2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function DashboardShortLinks() {
  const { shortlinkdetails, isPending } = useGetAllUserShortLinks();

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
          Short Links
        </h2>
        <p className="text-muted-foreground font-medium">
          Manage and track your shortened URLs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {shortlinkdetails?.result?.map((link, idx) => (
          <div 
            key={idx}
            className="group p-6 bg-card border border-border/50 rounded-2xl hover:border-primary-violet/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary-violet/5"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-violet/10 rounded-xl flex items-center justify-center shrink-0">
                    <Link2 className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div className="truncate">
                    <h4 className="font-bold text-foreground truncate">
                      {link.link}
                    </h4>
                    <p className="text-xs text-muted-foreground font-mono truncate">
                      {link.shortCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex-1 bg-muted/50 rounded-lg px-3 py-2 text-sm font-mono text-primary-violet truncate border border-border/50">
                    {link.shortLink}
                  </div>
                  <button 
                    onClick={() => handleCopy(link.shortLink)}
                    className="p-2 hover:bg-primary-violet/10 text-muted-foreground hover:text-primary-violet rounded-lg transition-all"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a 
                    href={link.shortLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 hover:bg-primary-violet/10 text-muted-foreground hover:text-primary-violet rounded-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex md:flex-col items-center justify-between md:justify-center gap-4 md:border-l border-border/50 md:pl-8">
                <div className="text-center">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Views</p>
                  <p className="text-2xl font-black text-foreground">{link.views || 0}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-muted-foreground hover:text-primary-violet hover:bg-primary-violet/10 rounded-xl transition-all">
                    <BarChart2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {(!shortlinkdetails?.result || shortlinkdetails.result.length === 0) && !isPending && (
          <div className="py-20 text-center bg-muted/20 border border-dashed border-border rounded-3xl">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Link2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">No short links yet</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">
              Shorten your first link from the home page or tools.
            </p>
          </div>
        )}

        {isPending && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-full h-32 bg-muted animate-pulse rounded-2xl" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}