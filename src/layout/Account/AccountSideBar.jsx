/* eslint-disable react-refresh/only-export-components */
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { HiLink } from "react-icons/hi2";

export default function AccountSideBar() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex flex-col gap-4">
        <SidebarTrigger />
        <SidebarTrigger type="links" />
      </main>
    </SidebarProvider>
  );
}
