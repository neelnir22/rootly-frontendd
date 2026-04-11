import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AccountSideBar from "./AccountSideBar";
import AccountNav from "./AccountNav";
import ProfileCard from "@/components/profile/ProfileCard";
import ProtectedRoute from "@/components/ui/protected-route";
import { useDarkMode } from "@/context/DarkModeContext";
import UserSmallProfile from "./UserProfile";
import { useGetAllLinks } from "@/authentication/useUser-getAllLinks";

export function UserAccount() {
  const { isDarkMode } = useDarkMode();

  const { allLinks } = useGetAllLinks();

  return (
    <ProtectedRoute>
      <div
        className={
          isDarkMode
            ? `h-screen overflow-hidden  bg-black`
            : `h-screen overflow-hidden  bg-gray-50`
        }
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-50 w-full "
        >
          <div className={isDarkMode ? "bg-black" : "bg-gray-100"}>
            <div>
              <div className="font-semibold">
                <AccountSideBar />
              </div>
            </div>
          </div>
          <ResizablePanel defaultSize="75%">
            <div className="h-full ">
              <nav className="flex justify-between font-semibold border-b">
                <AccountNav />
              </nav>
              <UserSmallProfile />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="20%">
            <div className="flex h-full items-center justify-center p-6">
              <ProfileCard type="links" data={allLinks?.links} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ProtectedRoute>
  );
}
