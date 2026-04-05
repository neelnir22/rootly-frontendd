import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function AccountSideBar() {
  const navigate = useNavigate();
  return (
    <>
      <ul className="pb-3">
        <li
          onClick={() => navigate("/admin")}
          className="cursor-pointer text-gray-500"
        >
          Manage Links
        </li>
      </ul>

      <ul className="pt-3">
        <li
          onClick={() => navigate("/admin/link-shortner")}
          className="cursor-pointer text-gray-500"
        >
          Link Shortner
        </li>
      </ul>
    </>
  );
}

export default AccountSideBar;
