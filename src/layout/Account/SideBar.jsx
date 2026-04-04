import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <ul className="pb-3">
        <li onClick={() => navigate("/admin")} className="cursor-pointer">
          Manage Links
        </li>
      </ul>

      <ul className="pt-3">
        <li
          onClick={() => navigate("/admin/link-shortner")}
          className="cursor-pointer"
        >
          Link Shortner
        </li>
      </ul>
    </>
  );
}

export default SideBar;
