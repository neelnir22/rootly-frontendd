/* eslint-disable react-refresh/only-export-components */

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("root");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("root");
      }
    },
    [isDarkMode],
  );

  function toggleIsDarkMode() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Context is used outside Provider");

  return context;
}

export { useDarkMode, DarkModeProvider };
