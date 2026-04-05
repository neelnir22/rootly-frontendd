import { Button } from "@/components/ui/button";

function DescriptionCard() {
  return (
    <div className="flex flex-col justify-center">
      <img src="image-1.png" alt="img" className="flex justify-center" />
      <h1 className="font-extrabold flex justify-center ">
        Drive traffic effortlessly with short links
      </h1>
      <h1 className="flex justify-center">
        Turn long URLs into compact, shareable links
      </h1>
      <h1 className="flex justify-center">for social media, ads and more.</h1>
      <Button className="w-10px flex bg-red-400 hover:bg-red-400 hover:opacity-50 border-gray-700 border-[0.3px]">
        <a href="/short-link" target="_blank" rel="noreferrer">
          {" "}
          Shorten-link
        </a>
      </Button>
    </div>
  );
}

export default DescriptionCard;
