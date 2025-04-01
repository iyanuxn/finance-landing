import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center gap-10 mt-20 w-full px-40 py-20 bg-black text-white border-t border-black dark:border-white/10">
      <Link className="w-1/3 flex" href="/">
        <div className="flex items-center justify-center relative isolation">
          <span className="font-bold text-xl tracking-tighter">
            Pro Finance
          </span>
          <div className="w-9 h-9 absolute -right-3 bg-primary rounded-full mix-blend-difference z-20"></div>
        </div>
      </Link>
      <div className="flex gap-10 font-medium md:text-sm text-xs">middle</div>
      <div className="flex flex-col gap-10 font-medium md:text-sm text-xs">
        newsletter
      </div>
    </div>
  );
};

export default Footer;
