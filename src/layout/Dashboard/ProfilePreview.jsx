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
      ? shortlinkdetails?.result?.map((l) => ({
          ...l,
          shortLink: { title: l.link.substring(0, 20) + "..." },
        }))
      : allLinks?.links;

  return (
    <div className="h-full flex flex-col items-center p-8 bg-muted/30 border-l border-border/50">
      <div className="w-full flex justify-between items-center mb-12">
        <h3 className="font-bold font-heading text-lg">Preview</h3>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <Share2 className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Mobile Mockup */}
      <div className="relative w-[300px] h-[600px] bg-card rounded-[3rem] border-8 border-muted-foreground/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-muted-foreground/10 rounded-b-2xl z-20"></div>

        {/* Mockup Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide bg-gradient-to-b from-primary-indigo/5 to-background">
          <div className="p-6 pt-12 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-indigo to-primary-violet p-1 mb-4 shadow-xl">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/blank-image.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h4 className="font-bold text-xl text-foreground">
              @{userproile?.user.userName || "username"}
            </h4>
            <p className="text-sm text-muted-foreground mt-2 px-4">
              Welcome to my Rootly profile! Check out my links below.
            </p>

            <div className="w-full mt-8 space-y-4 px-2">
              {linksToShow?.slice(0, 5).map((link, idx) => (
                <a
                  key={idx}
                  href={
                    activeTab === "short-links" ? link.shortLink : link.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full p-4 bg-card border border-border/50 rounded-2xl hover:bg-primary-indigo hover:border-primary-indigo transition-all duration-300 shadow-sm hover:shadow-primary-indigo/20"
                >
                  <span className="text-sm font-bold text-foreground group-hover:text-white truncate pr-4">
                    {activeTab === "short-links"
                      ? link.shortCode || "Short Link"
                      : link.shortLink?.title || "Link Title"}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white shrink-0" />
                </a>
              ))}

              {(!linksToShow || linksToShow.length === 0) && (
                <div className="text-xs text-muted-foreground italic mt-8">
                  No links added yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-12 flex items-center justify-center bg-card">
          <div className="w-32 h-1 bg-muted rounded-full"></div>
        </div>
      </div>

      <p className="mt-8 text-xs text-muted-foreground font-medium uppercase tracking-widest">
        rootly.com/{userproile?.user.userName}
      </p>
    </div>
  );
}
