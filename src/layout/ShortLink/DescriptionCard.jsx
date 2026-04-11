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
          {!(type === "links") && (
            <h1
              className={type ? "font-semibold" : "text-3xl font-semibold"}
            >{`127.0.0.1:3000/s/${code}`}</h1>
          )}
          {!type && <h1 className="text-xl font-semibold">{title}</h1>}
          <a
            href={`${link}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white break-all"
          >
            {link}
          </a>
        </div>

        <div className="flex items-center gap-6">
          {!(type === "links") && (
            <button
              onClick={handleCopy}
              className="w-14 h-14 flex items-center justify-center border border-red-300 rounded-full hover:bg-red-700 transition"
            >
              <Copy size={type ? 10 : 20} />
            </button>
          )}

          {!(type === "shortlink") && (
            <div className="w-26 h-26 rounded-md flex items-center justify-center">
              {image ? (
                <img src={`${image}`} alt="image" className="h-26" />
              ) : (
                "image not found"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
