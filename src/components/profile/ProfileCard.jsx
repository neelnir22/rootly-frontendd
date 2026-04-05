import { useState } from "react";
import { Pencil } from "lucide-react";

import randomColor from "randomcolor";

export default function ProfileCard({
  data = [],
  renderItem, // function to render your custom component
  username = "username",
  imageUrl = "https://via.placeholder.com/100",
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("My Profile");

  const randomcolor = randomColor();
  console.log(randomcolor);
  const col = `${randomcolor}`;
  console.log(col);
  return (
    <>
      <div className={`w-full flex justify-center items-center `}>
        {/* Main 9:16 Card */}
        <div
          className="w-full max-w-sm aspect-[9/16] bg-white rounded-3xl shadow-lg p-4 flex flex-col"
          style={{ backgroundColor: randomcolor }}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-3">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={imageUrl}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Editable Title */}
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

            {/* Username */}
            <p className="text-sm text-gray-500">@{username}</p>
          </div>

          {/* Scrollable Content */}
          <div className="mt-4 flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
            {data.map((item, index) => (
              <div key={index}>
                {renderItem ? renderItem(item, index) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
