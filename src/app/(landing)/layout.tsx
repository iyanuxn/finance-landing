"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { useContext } from "react";
import MyThemeContext from "@/contexts/theme-context";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkTheme } = useContext(MyThemeContext);

  return (
    <div
      className={`${isDarkTheme ? "dark bg-black" : "bg-white"}`}
    >
      <div className="fixed top-0 left-0 right-0 w-full">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default layout;
