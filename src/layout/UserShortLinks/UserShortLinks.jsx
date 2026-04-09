import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import AccountSideBar from "../Account/AccountSideBar";
import UserShortLinkDetailsNavPage from "./UserShortLinkDetailsNavPage";
import ProfileCard from "@/components/profile/ProfileCard";
import { useGetAllUserShortLinks } from "@/authentication/useGetAllUserShortLinks";
import { useDarkMode } from "@/context/DarkModeContext";

export function UserShortLinks() {
  const { shortlinkdetails, isPending } = useGetAllUserShortLinks();
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={
        isDarkMode
          ? "h-screen overflow-hidden bg-black "
          : "h-screen overflow-hidden bg-gray-50 "
      }
    >
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-50 w-full rounded "
      >
        <div className={isDarkMode ? "bg-black" : "bg-gray-100"}>
          <div className="flex h-screen justify-center items-center p-6 pt-0">
            <div className="font-semibold flex-col ">
              <AccountSideBar />
            </div>
          </div>
        </div>
        <div className="border-[0.5px]"></div>

        <ResizablePanel defaultSize="75%">
          <div className="h-full overflow-hidden ">
            <nav className="flex justify-between font-semibold border-b-[0.5px]">
              <UserShortLinkDetailsNavPage />
            </nav>

            <div className="flex justify-center w-full h-full ">
              <ProfileCard
                type="shortlink"
                data={shortlinkdetails?.result.shortlinks.shortLinks}
                username={shortlinkdetails?.result.userDetails.username}
                imageUrl={shortlinkdetails?.result.userDetails.image}
                isPending={isPending}
              />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
