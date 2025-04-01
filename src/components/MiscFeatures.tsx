import React from "react";
import Trade from "../assets/trade.svg";
import Image from "next/image";
import { FaApple } from "react-icons/fa6";

const MiscFeatures = () => {
  return (
    <div className="flex flex-col gap-40 mt-40 w-full px-20 dark:text-white">
      <div className="flex items-center gap-20 justify-between">
        <Image src={Trade} alt="hero1" className="w-[40%] -rotate-3" />
        <div className="w-1/2 flex flex-col gap-5">
          <h3 className="font-semibold text-4xl tracking-tighter">
            Trade in Real Time
          </h3>
          <span className="font-medium text-lg">
            No more waiting. Your orders are executed immediately, the price of
            your securites is updated every second and ProFinance always has the
            most relevant information
          </span>
        </div>
      </div>
      <div className="flex items-center gap-20 justify-between">
        <div className="w-1/2 flex flex-col gap-5">
          <h3 className="font-semibold text-4xl tracking-tighter">
            100,000+ <br /> Stocks in Your App
          </h3>
          <span className="font-medium text-lg">
            Trade through ProFinance and you'll gain access to thousands of
            financial markets from around the world, using a wide range of
            investment tools. We a re sure you'll find the right stock for you!
          </span>
        </div>
        <div className="w-96 h-96 bg-primary rounded-full"></div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="font-semibold text-5xl tracking-tighter text-center">
          Get the App for Free <br /> and Start Now
        </h1>
        <button className="btn text-lg bg-black text-white gap-2 border border-black dark:border-white/10 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaApple />
          Download App
        </button>
      </div>
    </div>
  );
};

export default MiscFeatures;
