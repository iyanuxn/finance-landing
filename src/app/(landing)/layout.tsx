"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { useContext } from "react";
import MyThemeContext from "@/contexts/theme-context";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkTheme } = useContext(MyThemeContext);

  return (
    <div
      className={`${
        isDarkTheme ? "dark bg-black" : "bg-white"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="fixed top-0 left-0 right-0 w-full bg-transparent z-[1000]">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default layout;
