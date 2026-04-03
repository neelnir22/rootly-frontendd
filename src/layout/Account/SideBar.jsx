import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="flex-col justify-between">
      <ul>
        <li onClick={() => navigate("/")} className="cursor-pointer">
          Manage Links
        </li>
        <li onClick={{}} className="cursor-pointer">
          Settings
        </li>
      </ul>

      <ul>
        <li onClick={{}} className="cursor-pointer">
          Link Shortner
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
