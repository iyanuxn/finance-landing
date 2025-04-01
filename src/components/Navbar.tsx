import MyThemeContext from "@/contexts/theme-context";
import Link from "next/link";
import { useContext } from "react";
import { FaApple } from "react-icons/fa6";
import { WiDaySunny, WiMoonAltWaningGibbous4 } from "react-icons/wi";

const Navbar = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);

  return (
    <div  className="w-full h-24 px-20 flex items-center justify-between">
      <Link className="w-1/3 flex" href="/">
        <div className="flex items-center justify-center relative isolation">
          <span className="font-bold text-xl tracking-tighter dark:text-white">
            Pro Finance
          </span>
          <div className="w-9 h-9 absolute -z-10 -right-3 bg-primary rounded-full dark:mix-blend-difference dark:z-10"></div>
        </div>
      </Link>
      <div className="flex items-center gap-10 font-medium md:text-sm text-xs text-neutral-600 w-1/3 justify-center">
        <Link
          className="dark:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="/"
        >
          About Us
        </Link>
        <Link
          className="dark:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="/"
        >
          Catalog
        </Link>
        <Link
          className="dark:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="/"
        >
          Price
        </Link>
        <Link
          className="dark:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="/"
        >
          Help
        </Link>
      </div>
      <div className="flex items-center gap-3 w-1/3 justify-end">
        <button
          className="dark:bg-white dark:text-black bg-black text-white h-8 w-8 rounded-full flex flex-col items-center justify-center text-lg"
          onClick={toggleThemeHandler}
        >
          <WiMoonAltWaningGibbous4
            className={`${
              isDarkTheme
                ? "translate-y-full opacity-0 invisible h-0"
                : "translate-y-0 opacity-100 visible"
            } transition-all duration-300 ease-in-out`}
          />
          <WiDaySunny
            className={`${
              isDarkTheme
                ? "translate-y-0 opacity-100 visible"
                : "translate-y-full opacity-0 invisible h-0"
            } transition-all duration-300 ease-in-out`}
          />
        </button>
        <button className="btn bg-grey  md:text-xs">Log In</button>
        <button className="btn bg-black text-white md:text-xs gap-2 border border-black dark:border-white/10 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaApple className="text-sm" />
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
