import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavBar from "../NavBar/NavBar";
import SideBar from "./SideBar";
import Content from "./Content";

export function UserAccount() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-50 w-full "
      >
        <div>
          <div className="flex h-screen justify-center p-6 pt-0">
            <span className="font-semibold">
              <SideBar />
            </span>
          </div>
        </div>
        <div className="border-[0.5px]"></div>

        <ResizablePanel defaultSize="75%">
          <div className="h-full ">
            <nav className="flex justify-between font-semibold border-b-1">
              <Content />
            </nav>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="20%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
