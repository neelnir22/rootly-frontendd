import { useNavigate } from "react-router";

import { Button } from "../../components/ui/button";
import NavToggleDarkMode from "./NavToggleDarkMode";

const token = localStorage?.getItem("user_token");
function NavButtons() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-1 items-center">
      <NavToggleDarkMode />
      {token ? (
        <>
          {" "}
          <Button variant="ghost" onClick={() => navigate("/admin")}>
            Account
          </Button>
          <Button variant="secondary" onClick={() => navigate("/signup")}>
            LogOut
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Log In
          </Button>
          <Button variant="secondary" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </>
      )}
    </div>
  );
}

export default NavButtons;
