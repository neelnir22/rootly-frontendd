import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import NavToggleDarkMode from "./NavToggleDarkMode";

const token = localStorage?.getItem("user_token");

function NavButtons() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user_token");
    window.location.replace("/");
  }

  return (
    <div className="flex gap-4 items-center">
      <NavToggleDarkMode />
      {token ? (
        <>
          <Button
            variant="ghost"
            className="text-sm font-medium"
            onClick={() => navigate("/admin")}
          >
            Account
          </Button>
          <Button
            className="bg-gradient-to-r from-primary-indigo to-primary-violet hover:opacity-90 text-white border-0 shadow-lg shadow-primary-indigo/20 px-6 rounded-full"
            onClick={logOut}
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="ghost"
            className="text-sm font-medium hover:bg-transparent hover:text-primary-indigo transition-colors"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            className="bg-gradient-to-r from-primary-indigo to-primary-violet hover:opacity-90 text-white border-0 shadow-lg shadow-primary-indigo/20 px-6 rounded-full transition-all hover:scale-105 active:scale-95"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </>
      )}
    </div>
  );
}

export default NavButtons;
