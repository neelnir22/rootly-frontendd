import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { useNavigate } from "react-router";

function Content() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="flex items-center text-2xl pl-3">Links</h1>
      <HiOutlineCog8Tooth
        className="w-10 h-16"
        onClick={() => navigate("/admin/settings")}
      />
    </>
  );
}

export default Content;
