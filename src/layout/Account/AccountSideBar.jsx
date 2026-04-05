import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { ManageLinksOption } from "./ManageLinksOption";

function AccountSideBar() {
  const navigate = useNavigate();
  return (
    <>
      <ul className="pb-3 w-full">
        <li className="cursor-pointer text-gray-500">
          <ManageLinksOption />
        </li>
      </ul>
      <ul></ul>

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
