import { Button } from "@/components/ui/button";

function StatsCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/image-2.png"
        alt="img"
        className="flex justify-center items-center w-60"
      />
      <h1 className="font-extrabold flex justify-center ">
        Monitor click stats in real time
      </h1>
      <h1 className="flex justify-center">See what resonates at a glance,</h1>
      <h1 className="flex justify-center">without relying on cookies</h1>
      <Button className="w-10px flex bg-green-400 hover:bg-green-400 hover:opacity-50 border-gray-700 border-[0.3px]">
        <a href="/short-link" target="_blank" rel="noreferrer">
          Create a link
        </a>
      </Button>
    </div>
  );
}

export default StatsCard;
