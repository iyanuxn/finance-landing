"use client";

import Advantages from "@/components/Advantages";
import Hero from "@/components/Hero";
import InvestmentFeatures from "@/components/InvestmentFeatures";

const page = () => {
  return (
    <div className="py-28 flex flex-col justify-center items-center text-black px-20">
      <Hero />
      <InvestmentFeatures />
      <Advantages />
    </div>
  );
};

export default page;
