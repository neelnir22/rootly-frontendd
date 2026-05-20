import React from "react";
import { Link as LinkIcon } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-tr from-primary-indigo to-primary-violet rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <LinkIcon className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold font-heading tracking-tight text-foreground">
                Rootly
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The ultimate platform to centralize your personal links and own
              your online presence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-indigo transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-indigo transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-indigo transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-heading text-foreground mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading text-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading text-foreground mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rootly Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Built with love for creators
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
