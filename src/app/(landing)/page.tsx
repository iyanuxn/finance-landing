"use client";

import { useContext } from "react";
import MyThemeContext from "@/contexts/theme-context";

const page = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-6xl">
      Invest for the Future
      <button onClick={toggleThemeHandler}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default page;
