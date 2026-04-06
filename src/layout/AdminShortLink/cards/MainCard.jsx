import { Button } from "@/components/ui/button";
import DescriptionCard from "./DescriptionCard";
import QrCard from "./QrCard";
import StatsCard from "./StatsCard";
import ChannelCard from "./ChannelCard";

export function MainCard() {
  return (
    <div className="w-full flex justify-center items-center bg-white max-w-3xl rounded-2xl">
      <div className="w-full h-full bg-white  shadow-lg p-4 flex flex-col gap-4 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="w-120 h-10 pt-2">
            <h1 className="text-2xl font-extrabold text-black">
              Shorten,share and track your links
            </h1>
          </div>

          <div className="w-24 h-10 rounded-lg pt-2">
            <Button className="bg-black hover:bg-black">
              <a href="/short-link" target="_blank" rel="noreferrer">
                Shorten a link
              </a>
            </Button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 p-2">
          <div className="bg-red-400 rounded-xl h-80">
            <DescriptionCard />
          </div>

          <div className="bg-blue-400 rounded-xl h-80">
            <QrCard />
          </div>

          <div className="bg-purple-400 rounded-xl h-80">
            <ChannelCard />
          </div>

          <div className="bg-green-400 rounded-xl h-80">
            <StatsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
