import React from "react";
import Hero1 from "../assets/hero1.png";
import { FaApple } from "react-icons/fa6";
import Image from "next/image";

const Cta = () => {
  return (
    <div className="flex gap-10 mt-40 w-full px-20">
      <div className="min-h-80 rounded-3xl border border-black dark:border-white/10 bg-gradient-to-b from-black via-black to-black/90 dark:to-white/10 w-full relative flex flex-col justify-center gap-10 p-20 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-medium tracking-tighter text-white">
          Keep Your Finger on the <br />
          Investment Market Purse
        </h1>
        <button className="btn bg-white text-black gap-2 border border-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          <FaApple className="text-sm" />
          Download App
        </button>
        <Image
          src={Hero1}
          alt="hero1"
          className="w-56 right-32 absolute z-20 rotate-6 shadow-2xl rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Cta;
