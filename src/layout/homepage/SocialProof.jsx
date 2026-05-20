import React from 'react';
import { 
  FaInstagram, 
  FaSnapchat, 
  FaYoutube, 
  FaTwitter, 
  FaTiktok, 
  FaLinkedin, 
  FaTwitch, 
  FaDiscord, 
  FaSpotify 
} from "react-icons/fa6";

const SocialProof = () => {
  const platforms = [
    { name: "Twitter", icon: FaTwitter },
    { name: "Instagram", icon: FaInstagram },
    { name: "TikTok", icon: FaTiktok },
    { name: "YouTube", icon: FaYoutube },
    { name: "Snapchat", icon: FaSnapchat },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "Twitch", icon: FaTwitch },
    { name: "Discord", icon: FaDiscord },
    { name: "Spotify", icon: FaSpotify },
  ];

  return (
    <section className="py-20 px-6 bg-background/50 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-medium mb-10 uppercase tracking-widest">
          Shorten links for any platform
        </p>
        
        {/* Infinite scroll or multi-row flex for many platforms */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 md:gap-y-12 opacity-30 grayscale">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-3 group hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <platform.icon className="text-2xl md:text-3xl" />
              <span className="text-xl md:text-2xl font-bold font-heading">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;