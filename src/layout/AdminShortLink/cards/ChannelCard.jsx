import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function ChannelCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/image-3.png" alt="img" className="flex justify-center w-60" />
      <h1 className="font-extrabold flex justify-center ">
        Create links for each of your channels
      </h1>
      <h1 className="flex justify-center">
        what truly clicks with your audience.
      </h1>
      <h1 className="flex justify-center">without relying on cookies</h1>
      <Button className="w-10px flex bg-purple-400 hover:bg-purple-400 hover:opacity-50 border-gray-700 border-[0.3px]">
        <a href="/short-link" target="_blank" rel="noreferrer">
          {" "}
          Shorten-link
        </a>
      </Button>
    </div>
  );
}

export default ChannelCard;
