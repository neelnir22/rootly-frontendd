import { Copy } from "lucide-react";
import randomColor from "randomcolor";

export default function DescriptionCard({ link, code, title, image, type }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`127.0.0.1:3000/s/${code}`);
    alert("Link copied!");
  };

  const randomcolor = randomColor();

  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div
        className={
          type
            ? "w-120 bg-red-800 text-white rounded-xl px-2 py-[0.7%] flex items-center justify-between"
            : "w-full max-w-6xl text-white rounded-3xl px-8 py-6 flex items-center justify-between"
        }
        style={{ backgroundColor: type === "shortlinks" && randomcolor }}
      >
        <div className={type ? "flex flex-col" : "flex flex-col gap-3"}>
          <h1
            className={type ? "font-semibold" : "text-3xl font-semibold"}
          >{`127.0.0.1:3000/s/${code}`}</h1>
          {!type && <h1 className="text-xl font-semibold">{title}</h1>}
          <p className="text-sm text-white break-all">{link}</p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handleCopy}
            className="w-14 h-14 flex items-center justify-center border border-red-300 rounded-full hover:bg-red-700 transition"
          >
            <Copy size={type ? 10 : 20} />
          </button>

          {!type && (
            <div className="w-26 h-26 bg-white rounded-md flex items-center justify-center">
              <img src={`${image}`} alt="image" className="h-26" />
              <div className="w-12 h-12 bg-black opacity-80"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
