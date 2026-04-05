import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { useDarkMode } from "@/context/DarkModeContext";

function NavBar() {
  const { isDarkMode } = useDarkMode();
  return (
    <nav
      className={
        isDarkMode
          ? "flex justify-between bg-black h-15"
          : "flex justify-between bg-white border-b-[0.5px] h-15"
      }
    >
      <NavLogo />
      <NavLinks />
      <NavButtons />
    </nav>
  );
}

export default NavBar;
