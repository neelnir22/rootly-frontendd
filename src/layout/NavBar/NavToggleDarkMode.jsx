import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/context/DarkModeContext";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function NavToggleDarkMode() {
  const { isDarkMode, toggleIsDarkMode } = useDarkMode();
  return (
    <Button onClick={toggleIsDarkMode}>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </Button>
  );
}

export default NavToggleDarkMode;
