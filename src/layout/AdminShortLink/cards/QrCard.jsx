import { Button } from "@/components/ui/button";

function QrCard() {
  return (
    <div className="flex flex-col justify-center">
      <img src="image-2.png" alt="img" className="flex justify-center" />
      <h1 className="font-extrabold flex justify-center ">
        Get a free QR code for every link
      </h1>
      <h1 className="flex justify-center">
        Your QR code makes it easy to connect
      </h1>
      <h1 className="flex justify-center">
        with your audience, online and offline.
      </h1>
      <Button className="w-10px flex bg-blue-400 hover:bg-blue-400 hover:opacity-50 border-gray-700 border-[0.3px]">
        <a href="/short-link" target="_blank" rel="noreferrer">
          Generate Qr Code
        </a>
      </Button>
    </div>
  );
}

export default QrCard;
