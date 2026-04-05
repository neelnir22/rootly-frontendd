import { useState } from "react";
import { Pencil } from "lucide-react";

import randomColor from "randomcolor";
import DescriptionCard from "@/layout/ShortLink/DescriptionCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

// link, code, title, image
export default function ProfileCard({
  data = [],
  type,
  username = "username",
  imageUrl = "https://via.placeholder.com/100",
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("My Profile");

  const randomcolor = randomColor();

  const navigate = useNavigate();

  return (
    <>
      {data.length === 0 ? (
        <div className="flex flex-col">
          <h1 className="text-5xl pb-3">NO Short Links Created</h1>
          <h1 className="text-5xl flex justify-center">Go Create One 😈</h1>
          <Button onClick={() => navigate("/admin/link-shortner")}>
            Create One !!!!
          </Button>
        </div>
      ) : (
        <div className={`w-full flex justify-center items-center `}>
          <div
            className="w-full max-w-sm aspect-9/16 bg-white rounded-3xl shadow-lg p-4 flex flex-col"
            style={{ backgroundColor: randomcolor }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={imageUrl}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2">
                {isEditing ? (
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-b outline-none text-center"
                  />
                ) : (
                  <h2 className="text-lg font-semibold">{title}</h2>
                )}

                <Pencil
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setIsEditing(!isEditing)}
                />
              </div>

              <p className="text-sm text-gray-500">@{username}</p>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
              {data.map((item, index) => (
                <div key={index}>
                  {item ? <DescriptionCard type={type} /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
