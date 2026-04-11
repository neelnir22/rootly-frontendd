import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ManageLinksOption } from "@/layout/Account/ManageLinksOption";
import { Button } from "./button";
import { useNavigate } from "react-router";

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="flex hover:rounded-2xl hover:bg-gray-700 p-2 items-center">
        USER
      </SidebarHeader>
      <SidebarContent className="justify-center">
        <SidebarGroup className=" items-center">
          <li className="cursor-pointer">
            <ManageLinksOption />
          </li>
        </SidebarGroup>

        <SidebarGroup>
          <li
            onClick={() => navigate("/admin/link-shortner")}
            className="cursor-pointer text-gray-500 flex  justify-center"
          >
            Link Shortner
          </li>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="destructive">LogOut</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
