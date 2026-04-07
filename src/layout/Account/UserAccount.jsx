import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AccountSideBar from "./AccountSideBar";
import AccountNav from "./AccountNav";
import ProfileCard from "@/components/profile/ProfileCard";
import ProtectedRoute from "@/components/ui/protected-route";

export function UserAccount() {
  return (
    <ProtectedRoute>
      <div className="h-screen overflow-hidden  bg-gray-50">
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-50 w-full "
        >
          <div className="bg-gray-100">
            <div className="flex h-screen justify-center items-center p-6 pt-0">
              <div className="font-semibold flex-col ">
                <AccountSideBar />
              </div>
            </div>
          </div>
          <div className="border-[0.5px]"></div>

          <ResizablePanel defaultSize="75%">
            <div className="h-full ">
              <nav className="flex justify-between font-semibold border-b">
                <AccountNav />
              </nav>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="20%">
            <div className="flex h-full items-center justify-center p-6">
              <ProfileCard type="shortlink" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ProtectedRoute>
  );
}
