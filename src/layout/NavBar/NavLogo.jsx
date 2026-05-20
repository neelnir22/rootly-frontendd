import { Link as LinkIcon } from "lucide-react";

function NavLogo() {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 bg-gradient-to-tr from-primary-indigo to-primary-violet rounded-xl flex items-center justify-center shadow-lg shadow-primary-indigo/20 group-hover:scale-105 transition-transform">
        <LinkIcon className="text-white w-6 h-6" />
      </div>
      <span className="text-xl font-bold font-heading tracking-tight text-foreground">
        Rootly
      </span>
    </a>
  );
}

export default NavLogo;
