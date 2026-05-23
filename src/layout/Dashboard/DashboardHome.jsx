import React, { useRef } from 'react';
import { useGetAllLinks } from "@/authentication/useUser-getAllLinks";
import { useAddLink } from "@/authentication/useUser-AddLink";
import { Plus, Link as LinkIcon, Trash2, Edit2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

export default function DashboardHome() {
  const { allLinks, isPending } = useGetAllLinks();
  const { addlink, isPending: isAdding } = useAddLink();
  const linkRef = useRef();

  const handleAddLink = (e) => {
    e.preventDefault();
    const url = linkRef.current.value;
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    addlink(url);
    linkRef.current.value = "";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
            Links
          </h2>
          <p className="text-muted-foreground font-medium">
            Manage your profile links and connections
          </p>
        </div>
        <form onSubmit={handleAddLink} className="flex items-center gap-3">
          <div className="relative group">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
            <Input
              ref={linkRef}
              placeholder="https://your-link.com"
              className="pl-10 py-5 w-64 md:w-80 bg-card border-border rounded-xl focus:ring-primary-indigo/20 transition-all"
            />
          </div>
          <Button 
            disabled={isAdding}
            className="bg-primary-indigo hover:bg-primary-violet text-white px-6 py-5 rounded-xl font-bold shadow-lg shadow-primary-indigo/20 transition-all hover:scale-105 active:scale-95"
          >
            {isAdding ? <Plus className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5 mr-2" />}
            Add Link
          </Button>
        </form>
      </div>

      <div className="space-y-4">
        {allLinks?.links?.map((link, idx) => (
          <div 
            key={idx}
            className="group relative flex items-center gap-4 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary-indigo/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary-indigo/5"
          >
            <div className="cursor-grab active:cursor-grabbing text-muted-foreground/30 hover:text-muted-foreground transition-colors">
              <GripVertical className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-foreground truncate">
                  {link.shortLink.title || "Untitled Link"}
                </h4>
                <button className="p-1 text-muted-foreground hover:text-primary-indigo transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground truncate max-w-md">
                {link.link}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Active
              </div>
              <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {(!allLinks?.links || allLinks.links.length === 0) && !isPending && (
          <div className="py-20 text-center bg-muted/20 border border-dashed border-border rounded-3xl">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">No links yet</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">
              Start by adding your first link using the form above.
            </p>
          </div>
        )}

        {isPending && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-full h-24 bg-muted animate-pulse rounded-2xl" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}