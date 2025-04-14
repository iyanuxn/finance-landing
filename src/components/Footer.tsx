import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TfiArrowRight } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex justify-between gap-20 mt-20 w-full px-40 py-20 bg-black text-white border-t border-black dark:border-white/10">
      <Link className="flex items-start" href="/">
        <div className="flex items-center justify-center relative isolation">
          <span className="font-bold text-xl tracking-tighter">
            Pro Finance
          </span>
          <div className="w-9 h-9 absolute -right-3 bg-primary rounded-full mix-blend-difference z-20"></div>
        </div>
      </Link>
      <div className="flex gap-20 font-semibold md:text-base text-xs">
        <div className="flex flex-col gap-3">
          <span>Resources</span>
          <div className="flex flex-col gap-1 opacity-50 font-extralight">
            <Link href="#">Stocks & Funds</Link>
            <Link href="#">Learn</Link>
            <Link href="#">Help & Support</Link>
            <Link href="#">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span>Company</span>
          <div className="flex flex-col gap-1 opacity-50 font-extralight">
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col justify-between">
        <form className="flex flex-col gap-1 font-semibold md:text-sm text-xs">
          <label>Subscribe to News</label>
          <div className="p-1 pl-2 flex items-stretch gap-1 outline-none border border-white/20 focus-within:border-primary rounded-xl transition-all duration-300 ease-in-out">
            <input placeholder="Your e-mail" type="text" className="w-56 bg-transparent outline-none font-normal" />
            <div className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg p-3 text-black">
              <TfiArrowRight className="w-full h-full object-cover" />
            </div>
          </div>
        </form>
        <div className="flex items-center gap-3 text-xl">
          <FaFacebookSquare />
          <FaTwitter />
          <PiInstagramLogoFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
