import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import NavBar from "../NavBar/NavBar";
import SideBar from "../Account/SideBar";
import ShortLinkNav from "./ShortLinkNav";
import { MainCard } from "./cards/MainCard";

export function ShortenLinkPage() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-50 w-full "
      >
        <div>
          <div className="flex h-screen justify-center items-center p-6 pt-0">
            <div className="font-semibold flex-col ">
              <SideBar />
            </div>
          </div>
        </div>
        <div className="border-[0.5px]"></div>

        <ResizablePanel defaultSize="75%">
          <div className="h-full overflow-hidden ">
            <nav className="flex justify-between font-semibold border-b">
              <ShortLinkNav />
            </nav>
            <div className="flex justify-center pt-12 w-full h-full">
              <MainCard />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
