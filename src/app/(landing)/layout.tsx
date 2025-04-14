"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { useContext } from "react";
import MyThemeContext from "@/contexts/theme-context";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  const lenis = new Lenis({ autoRaf: true });

  lenis.on("scroll", (e) => {
    console.log(e);
  });
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
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
