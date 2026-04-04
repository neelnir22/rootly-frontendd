import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { useNavigate } from "react-router";

function ShortLinkDetailsNavPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="flex items-center text-3xl pl-3">Shorten Links</h1>
      <HiOutlineCog8Tooth
        className="w-10 h-20"
        onClick={() => navigate("/admin/settings")}
      />
    </>
  );
}

export default ShortLinkDetailsNavPage;
