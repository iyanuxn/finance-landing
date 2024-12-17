"use client";

import { FaApple } from "react-icons/fa6";
import { IoArrowDownOutline } from "react-icons/io5";
import Image from "next/image";
import Hero1 from "../../../src/assets/hero1.png";
// import Arrow1 from "../../../src/assets/arrow1.svg";
import Hero2 from "../../../src/assets/hero2.png";
import { GiStarShuriken } from "react-icons/gi";

const page = () => {
  return (
    <div className="py-28 flex flex-col justify-center items-center text-black px-20">
      <div className="w-full h-[80vh] bg-primary p-20 rounded-[3rem] flex items-center">
        {/* left */}
        <div className="flex flex-col gap-5 w-[45%]">
          {/* decorative was hard to keep positioned */}
          {/* <Image alt="arrow1" src={Arrow1} className="absolute -bottom-4 w-[40%] -right-10" /> */}
          <div className="flex gap-2">
            <h1 className="text-7xl font-semibold tracking-tighter">
              Invest for the Future
            </h1>
            <GiStarShuriken className="text-8xl text-black" />
          </div>
          <span className="text-lg font-medium">
            Work with all the necessary information and tools to boost money
            flow from your capital investment using Profinance!
          </span>
          <button className="btn bg-black text-white gap-2 border border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            <FaApple className="text-sm" />
            Download App
          </button>
          <button className="flex items-center gap-2 mt-8 font-semibold tracking-tighter text-sm">
            Find Out More{" "}
            <IoArrowDownOutline className="text-base animate-bounce" />
          </button>
        </div>
        {/* right */}
        <div className="relative w-[55%] flex items-center justify-center">
          <Image
            src={Hero1}
            alt="hero1"
            className="w-[45%] absolute z-20 right-64 -top-64 -rotate-6 shadow-2xl rounded-3xl"
          />
          <Image
            src={Hero2}
            alt="hero2"
            className="w-[45%] absolute z-10 right-0 -top-48 rotate-6 shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
