import { useDarkMode } from "@/context/DarkModeContext";

function NavLogo() {
  const { isDarkMode } = useDarkMode();
  return (
    <a
      href="/"
      className={
        isDarkMode
          ? "font-bold text-white pl-5 flex justify-center items-center"
          : "font-bold text-gray-800 pl-5 flex justify-center items-center"
      }
    >
      Rootly
    </a>
  );
}

export default NavLogo;
