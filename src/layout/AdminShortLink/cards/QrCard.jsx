// import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function QrCard() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-80 h-80 grow rounded-lg bg-blue-800"
    >
      {/* <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-10 absolute"
      /> */}
    </AspectRatio>
  );
}
