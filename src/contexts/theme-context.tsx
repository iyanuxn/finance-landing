"use client";

import {
  createContext,
  ReactElement,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
}

const MyThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
});

export function MyThemeContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme !== null) {
      return JSON.parse(storedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDarkScheme;
    }
  });

  const toggleThemeHandler = (): void => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
  };

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
