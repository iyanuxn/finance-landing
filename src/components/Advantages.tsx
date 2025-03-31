import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { LuRocket } from "react-icons/lu";
import { PiQuestionMarkBold } from "react-icons/pi";
import { TbCoins } from "react-icons/tb";

const Advantages = () => {
  return (
    <div className="flex gap-10 mt-40 w-full">
      <div className="w-1/3 flex flex-col gap-3">
        <h1 className="text-5xl font-semibold tracking-tighter dark:text-white">
          Advantages
        </h1>
        <span>
          We listen to our customers and work with them to improve the user
          experience of our platform
        </span>
      </div>
      <div className="w-2/3 grid grid-cols-2">
        <div className="flex flex-col p-10 justify-between gap-5 border-grey border-r-2 border-b-2">
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center">
              <LuRocket />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold tracking-tighter">Smooth Start</span>
              <span className="opacity-50 font-medium tracking-tighter">
                Without a visit to the office, we will set up a brokeage account
                in 5 minutes
              </span>
            </div>
          </div>
          <button className="btn bg-grey  md:text-xs ml-12">
            Open an Account
          </button>
        </div>
        <div className="flex flex-col p-10 justify-between gap-5 border-grey border-b-2">
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center">
              <PiQuestionMarkBold />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold tracking-tighter">24/7 Support</span>
              <span className="opacity-50 font-medium tracking-tighter">
                Our support team is always available to answer your questions
                and resolve any issues
              </span>
            </div>
          </div>
          <button className="btn bg-grey  md:text-xs ml-12">
            Ask a Question
          </button>
        </div>
        <div className="flex flex-col p-10 justify-between gap-5 border-grey border-r-2">
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center">
              <TbCoins />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold tracking-tighter">
                Low Commissions
              </span>
              <span className="opacity-50 font-medium tracking-tighter">
                We give you the best rate we can find for any kind of
                transaction. No extra fees
              </span>
            </div>
          </div>
          <button className="btn bg-grey  md:text-xs ml-12">
            Explore Prices
          </button>
        </div>
        <div className="flex flex-col p-10 justify-between gap-5">
          <div className="flex gap-3">
            <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center">
              <IoCheckmarkDoneOutline />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold tracking-tighter">
                Invest Any Amount
              </span>
              <span className="opacity-50 font-medium tracking-tighter">
                You don't have to have large sums to start investing, start
                small
              </span>
            </div>
          </div>
          <button className="btn bg-grey  md:text-xs ml-12">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
