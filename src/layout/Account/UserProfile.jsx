import { useRef, useState } from "react";
import { Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DescriptionCard from "../ShortLink/DescriptionCard";
import { useAddLink } from "@/authentication/useUser-AddLink";
// import { useForm } from "react-hook-form";

export default function UserSmallProfile({
  imageUrl = "https://via.placeholder.com/40",
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { addlink } = useAddLink();

  const linkRef = useRef();

  function handleClick() {
    console.log("hey");
    const link = linkRef.current.value;
    console.log({ link });
    addlink(link);
    linkRef.current.value = "";
  }
  return (
    <>
      <div className="w-[80%] flex items-center justify-between gap-4 p-2 h-40">
        {/* Left: Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-500">
          <img
            src={imageUrl}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2 flex-1 bg-green-500 w-20">
          <div className="flex flex-col flex-1 gap-2">
            <input
              type="text"
              value={"username"}
              disabled={!isEditing}
              onClick={() => setIsEditing((edit) => !edit)}
              className={`text-sm font-medium outline-none ${
                isEditing ? "border-b" : "bg-transparent"
              }`}
            />

            <input
              type="text"
              value={"title"}
              disabled={!isEditing}
              onClick={() => setIsEditing((edit) => !edit)}
              className={`text-xs text-gray-500 outline-none ${
                isEditing ? "border-b" : "bg-transparent"
              }`}
            />
          </div>
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger
          render={
            <div className="flex justify-center">
              <Button variant="secondary" className="w-90">
                + Add
              </Button>
            </div>
          }
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Add links to your Sharable profile
            </AlertDialogTitle>
            <AlertDialogDescription>
              Add yours links to your profile, share your links, flex infront of
              your friends and manage all your important links in one single
              place 😈
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Label htmlFor="email">Link</Label>
          <Input
            id="link"
            type="link"
            ref={linkRef}
            placeholder="https://www.your-link.com"
          />
          <Button onClick={handleClick}>Add</Button>
        </AlertDialogContent>
      </AlertDialog>
      <div className="w-full">
        {/* link, code, title, image, type */}
        <DescriptionCard type="links" />
      </div>
    </>
  );
}
