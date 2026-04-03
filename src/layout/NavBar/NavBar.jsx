import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function NavBar() {
  return (
    <nav className="flex justify-between bg-gray-200 h-15">
      <NavLogo />
      <NavLinks />
      <NavButtons />
    </nav>
  );
}

export default NavBar;
