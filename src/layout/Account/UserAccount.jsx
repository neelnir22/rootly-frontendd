import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import ProtectedRoute from "@/components/ui/protected-route";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardShortLinks from "../Dashboard/DashboardShortLinks";
import DashboardAnalytics from "../Dashboard/DashboardAnalytics";
import ProfilePreview from "../Dashboard/ProfilePreview";

export function UserAccount() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "short-links":
        return <DashboardShortLinks />;
      case "analytics":
        return <DashboardAnalytics />;
      case "settings":
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-2xl font-bold font-heading mb-2 text-foreground">
              Settings
            </h2>
            <p className="text-muted-foreground">
              Account settings and preferences will appear here.
            </p>
          </div>
        );
      default:
        return <DashboardHome />;
    }
  };

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="flex h-screen w-full bg-background overflow-hidden">
          {/* Sidebar */}
          <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-20 border-b border-border/50 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md sticky top-0 z-10">
              <h1 className="text-xl font-bold font-heading text-foreground capitalize">
                {activeTab.replace("-", " ")}
              </h1>
              <div className="flex items-center gap-4">
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
              {renderContent()}
            </div>
          </main>

          {/* Right Sidebar - Profile Preview */}
          <aside className="hidden xl:block w-[400px]">
            <ProfilePreview activeTab={activeTab} />
          </aside>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
