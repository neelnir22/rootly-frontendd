import { Button } from "../../components/ui/button";
import { HiOutlineMoon } from "react-icons/hi2";
import NavToggleDarkMode from "./NavToggleDarkMode";
function NavButtons() {
  return (
    <div className="flex gap-1 items-center">
      <NavToggleDarkMode />
      <Button variant="ghost">Log In</Button>
      <Button variant="secondary">Sign up</Button>
    </div>
  );
}

export default NavButtons;
