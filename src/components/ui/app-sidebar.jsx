import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Link2, BarChart3, Settings, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router";
import { useGetUserProfile } from "@/authentication/useGetUserProfile";

export function AppSidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  const { userproile } = useGetUserProfile();

  function logOut() {
    localStorage.removeItem("user_token");
    window.location.replace("/");
  }

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "short-links", label: "Short Links", icon: Link2 },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary-indigo to-primary-violet rounded-xl flex items-center justify-center shadow-lg shadow-primary-indigo/20">
            <Link2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-foreground">
            Rootly
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  onClick={() => setActiveTab(item.id)}
                  isActive={activeTab === item.id}
                  className={`flex items-center gap-3 px-4 py-6 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-primary-indigo/10 text-primary-indigo font-bold shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? "text-primary-indigo" : ""}`} />
                  <span className="text-base">{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="bg-muted/50 rounded-2xl p-4 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-indigo/20 flex items-center justify-center text-primary-indigo font-bold">
            {userproile?.user.userName?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold truncate text-foreground">
              {userproile?.user.userName}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {userproile?.user.email}
            </span>
          </div>
        </div>
        <button
          onClick={logOut}
          className="flex items-center gap-3 px-4 py-3 w-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
