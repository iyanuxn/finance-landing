import React from "react";
import Image from "next/image";
import NYSE from "../assets/nyse.svg";
import Mastercard from "../assets/mastercard.svg";
import citi from "../assets/citi.svg";
import visa from "../assets/visa.svg";
import boa from "../assets/boa.svg";
import tradingView from "../assets/tradingView.svg";
import nasdaq from "../assets/nasdaq.svg";
import hsbc from "../assets/hsbc.svg";

const partners = [
  { name: "NYSE", logo: NYSE },
  { name: "Mastercard", logo: Mastercard },
  { name: "Citi", logo: citi },
  { name: "Visa", logo: visa },
  { name: "Bank of America", logo: boa },
  { name: "TradingView", logo: tradingView },
  { name: "Nasdaq", logo: nasdaq },
  { name: "HSBC", logo: hsbc },
];

const Partners = () => {
  return (
    <div className="flex gap-10 mt-40 flex-col items-center w-full">
      <div className="flex flex-col gap-5 w-full items-center dark:text-white">
        <h1 className="text-5xl font-semibold tracking-tighter">
          Our Partners
        </h1>
        <h1 className="text-xl font-semibold tracking-tighter w-1/2 opacity-70 text-center">
          The largest banks, funds, and exchanges from all over the world
          cooperate with us.
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-16">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-20 h-20 bg-grey rounded-full overflow-hidden p-4 flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className="w-full object-contain filter grayscale transition-all duration-200 ease-in-out hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
