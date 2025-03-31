import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import Image from "next/image";

const InvestmentFeatures = () => {
  return (
    <div className="flex gap-10 mt-40 flex-col w-full">
      <h1 className="text-5xl font-semibold tracking-tighter dark:text-white">
        Get the Most Out <br></br> of Your Investments
      </h1>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-5 justify-between bg-grey dark:bg-grey/10 dark:text-grey h-52 rounded-3xl p-10 w-[45%] relative overflow-hidden">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl tracking-tighter">
              Unlimited Portfolio Accounts
            </h3>
            <span className="font-medium opacity-70 w-2/3">
              Manage all your financial assets from one place
            </span>
          </div>
          <Link className="flex items-center gap-2 group" href="#">
            <span className="font-semibold text-sm">Read More</span>
            <IoArrowForwardOutline className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          </Link>
          <Image
            src={feature1}
            alt="feature1"
            className="absolute -bottom-10 -right-16 w-60"
          />
        </div>
        <div className="flex flex-col gap-5 justify-between bg-grey dark:bg-grey/10 dark:text-grey h-52 rounded-3xl p-10 w-[55%] relative overflow-hidden">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl tracking-tighter">
              Full Analytics in Your App
            </h3>
            <span className="font-medium opacity-70 w-2/3">
              Manage all your financial assets from one place
            </span>
          </div>
          <Link className="flex items-center gap-2 group" href="#">
            <span className="font-semibold text-sm">Read More</span>
            <IoArrowForwardOutline className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          </Link>
          <Image
            src={feature2}
            alt="feature2"
            className="absolute -bottom-16 -right-16 w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentFeatures;
