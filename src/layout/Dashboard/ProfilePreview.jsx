import React from "react";
import { useGetUserProfile } from "@/authentication/useGetUserProfile";
import { useGetAllLinks } from "@/authentication/useUser-getAllLinks";
import { useGetAllUserShortLinks } from "@/authentication/useGetAllUserShortLinks";
import { ExternalLink, Share2 } from "lucide-react";

export default function ProfilePreview({ activeTab }) {
  const { userproile } = useGetUserProfile();
  const { allLinks } = useGetAllLinks();
  const { shortlinkdetails } = useGetAllUserShortLinks();

  const linksToShow =
    activeTab === "short-links"
      ? (Array.isArray(shortlinkdetails?.result)
          ? shortlinkdetails.result
          : []
        ).map((l) => ({
          ...l,
          displayTitle: l.link?.substring(0, 20) + "...",
        }))
      : Array.isArray(allLinks?.links)
        ? allLinks.links
        : [];

  return (
    <div className="h-full flex flex-col items-center p-8 bg-muted/30 border-l border-border/50">
      <div className="w-full flex justify-between items-center mb-12">
        <h3 className="font-bold font-heading text-lg">Live Preview</h3>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <Share2 className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Profile Card Preview */}
      <div className="w-full max-w-sm bg-card rounded-[2rem] border border-border/50 shadow-xl overflow-hidden flex flex-col">
        <div className="flex-1 bg-gradient-to-b from-primary-indigo/5 to-background">
          <div className="p-8 flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary-indigo to-primary-violet p-1 mb-6 shadow-xl">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/blank-image.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Username */}
            <h4 className="font-bold text-2xl text-foreground">
              @{userproile?.user.userName || "username"}
            </h4>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground mt-3 px-4 leading-relaxed">
              Welcome to my Rootly profile! Check out my curated links and social connections below.
            </p>

            {/* Links Section */}
            <div className="w-full mt-10 space-y-4">
              <div className="flex items-center gap-2 mb-2 px-2">
                <div className="h-px flex-1 bg-border/50"></div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Links</span>
                <div className="h-px flex-1 bg-border/50"></div>
              </div>

              {linksToShow?.slice(0, 6).map((link, idx) => (
                <a
                  key={idx}
                  href={
                    activeTab === "short-links" ? link.shortLink : link.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full p-4 bg-card border border-border/50 rounded-2xl hover:bg-primary-indigo hover:border-primary-indigo transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-indigo/20"
                >
                  <span className="text-sm font-bold text-foreground group-hover:text-white truncate pr-4">
                    {activeTab === "short-links"
                      ? link.shortCode || link.displayTitle
                      : link.shortLink?.title || "Link Title"}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}

              {(!linksToShow || linksToShow.length === 0) && (
                <div className="py-8 px-4 border border-dashed border-border rounded-2xl">
                  <p className="text-xs text-muted-foreground italic">
                    No links added yet. Your profile is looking a bit empty!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-muted/30 border-t border-border/50 flex justify-center">
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
            rootly.com/{userproile?.user.userName || "user"}
          </p>
        </div>
      </div>
    </div>
  );
}
