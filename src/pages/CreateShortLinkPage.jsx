import NavBar from "@/layout/NavBar/NavBar";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useCreateShortLink } from "@/authentication/useCreateShortLink";
import DescriptionCard from "@/layout/ShortLink/DescriptionCard";

function CreateShortLinkPage() {
  const { generateshortlink, data, isPending } = useCreateShortLink();
  console.log({ data });

  const inputRef = useRef();
  function handleClick() {
    console.log(inputRef);
  }

  function handlePaste(e) {
    console.log({ e: e.target.value });
    if (
      !(
        e.target.value.startsWith("127.0.0.1:3000") ||
        e.target.value.startsWith("http")
      )
    ) {
      toast.error("enter a valid email");
    } else {
      generateshortlink(e.target.value);
      inputRef.current.value = "";
    }
  }
  return (
    <div>
      <NavBar />
      <div className="h-screen flex flex-col">
        <h1 className="flex  justify-center pt-50 text-4xl">
          Your links are too damn 🤢 long
        </h1>
        <h1 className="flex justify-center text-3xl font-extrabold tracking-tight text-balance bg-linear-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
          👉 Shorten 👈 them long bois
        </h1>

        {isPending ? (
          <div className="pt-10 flex justify-center w-full">
            <Input
              id="email"
              type="email"
              placeholder="Paste Your Long Link Here"
              className="w-180 h-20"
              ref={inputRef}
              disabled
              onPaste={(e) => handlePaste(e)}
            />
            <div className="flex items-center">
              <Button
                className="w-40 h-20 font-semibold text-2xl bg-pink-500 hover:w-50 hover:bg-pink-400"
                onClick={handleClick}
              >
                Creating....
              </Button>
            </div>
          </div>
        ) : (
          <div className="pt-10 flex justify-center w-full">
            <Input
              id="email"
              type="email"
              placeholder="Paste Your Long Link Here"
              className="w-180 h-20"
              ref={inputRef}
              onPaste={(e) => handlePaste(e)}
            />
            <div className="flex items-center">
              <Button
                className="w-40 h-20 font-semibold text-2xl bg-pink-500 hover:w-50 hover:bg-pink-400"
                onClick={handleClick}
              >
                Shorten Link
              </Button>
            </div>
          </div>
        )}
        {data && (
          <DescriptionCard
            link={data.result.link}
            image={data.result.image}
            code={data.result.code}
            title={data.result.title}
          />
        )}
      </div>
    </div>
  );
}

export default CreateShortLinkPage;
