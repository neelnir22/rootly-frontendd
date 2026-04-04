import { Copy } from "lucide-react";

export default function DescriptionCard({ link, code, title, image }) {
  // const link = "https://www.youtube.com/watch?v=HobKosalNw&pp=0gcJCdkKAYcqIYzv";

  const handleCopy = () => {
    navigator.clipboard.writeText(`127.0.0.1:3000/s/${code}`);
    alert("Link copied!");
  };

  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div className="w-full max-w-6xl bg-red-800 text-white rounded-3xl px-8 py-6 flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{`127.0.0.1:3000/s/${code}`}</h1>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm text-red-200 break-all">{link}</p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handleCopy}
            className="w-14 h-14 flex items-center justify-center border border-red-300 rounded-full hover:bg-red-700 transition"
          >
            <Copy size={20} />
          </button>

          <div className="w-26 h-26 bg-white rounded-md flex items-center justify-center">
            <img src={`${image}`} alt="image" className="h-26" />
            <div className="w-12 h-12 bg-black opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
