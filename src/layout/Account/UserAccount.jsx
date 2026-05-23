import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import ProfilePreview from "../Dashboard/ProfilePreview";
import { Outlet, useLocation } from "react-router";
import NavToggleDarkMode from "../NavBar/NavToggleDarkMode";

export function UserAccount() {
  const location = useLocation();
  const path = location.pathname;

  // Determine active tab for sidebar and header
  const getActiveTab = () => {
    if (path === "/admin") return "home";
    if (path.includes("short-links")) return "short-links";
    if (path.includes("analytics")) return "analytics";
    if (path.includes("settings")) return "settings";
    return "home";
  };

  const activeTab = getActiveTab();

  // Conditionally show profile preview (only on home and short-links)
  const showProfilePreview =
    activeTab === "home" || activeTab === "short-links";

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        {/* Sidebar */}
        <AppSidebar activeTab={activeTab} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-20 border-b border-border/50 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md sticky top-0 z-10">
            <h1 className="text-xl font-bold font-heading text-foreground capitalize">
              {activeTab.replace("-", " ")}
            </h1>
            <div className="flex items-center gap-6">
              <NavToggleDarkMode />
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Status
                </p>
                <p className="text-sm font-bold text-accent-teal flex items-center gap-1.5 justify-end">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
                  Live
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <Outlet />
          </div>
        </main>

        {/* Right Sidebar - Profile Preview */}
        {showProfilePreview && (
          <aside className="hidden xl:block w-[400px]">
            <ProfilePreview activeTab={activeTab} />
          </aside>
        )}
      </div>
    </SidebarProvider>
  );
}
