import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <NavLogo />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <NavButtons />
      </div>
    </nav>
  );
}

export default NavBar;
