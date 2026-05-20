import { LoginForm } from "@/layout/login/LoginForm";
import { Link as LinkIcon, CheckCircle2 } from "lucide-react";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side - Visual/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-indigo to-primary-violet p-12 flex-col justify-between">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>

        <a href="/" className="flex items-center gap-2 group relative z-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <LinkIcon className="text-primary-indigo w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight text-white">
            Rootly
          </span>
        </a>

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-extrabold font-heading text-white mb-8 leading-tight">
            Start your journey <br /> with Rootly today.
          </h1>
          <div className="space-y-6">
            {[
              "Centralize all your links in one place",
              "Powerful real-time analytics",
              "Custom branded short domains",
              "Complete data portability control",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90 font-medium">
                <CheckCircle2 className="w-6 h-6 text-accent-teal" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-white/60 text-sm font-medium">
          © {new Date().getFullYear()} Rootly Inc. All rights reserved.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-primary-indigo to-primary-violet rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <LinkIcon className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-foreground">
                Rootly
              </span>
            </a>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
