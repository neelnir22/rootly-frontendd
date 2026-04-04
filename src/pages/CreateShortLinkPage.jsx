import NavBar from "@/layout/NavBar/NavBar";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

function CreateShortLinkPage() {
  const inputRef = useRef();
  function handleClick() {
    console.log(inputRef);
  }

  function handlePaste(e) {
    console.log("pasted");
    console.log({ e: e.target.value });
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
      </div>
    </div>
  );
}

export default CreateShortLinkPage;
