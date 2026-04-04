// import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDarkMode } from "@/context/DarkModeContext";
import { QrCard } from "./QrCard";
import CardNav from "./CardNav";
import { DescriptionCard } from "./DescriptionCard";

export function MainCard() {
  const { isDarkMode } = useDarkMode();
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-[80%] h-[80%] rounded-lg bg-yellow-400 flex flex-col"
    >
      <CardNav />
      <div className=" grow grid grid-cols-2">
        <div className="">
          <QrCard />
        </div>
        <div>
          <DescriptionCard />
        </div>
        <div>
          <DescriptionCard />
        </div>
        <div>
          <DescriptionCard />
        </div>
      </div>
    </AspectRatio>
  );
}
