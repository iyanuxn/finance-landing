"use client";

import Advantages from "@/components/Advantages";
import Hero from "@/components/Hero";
import InvestmentFeatures from "@/components/InvestmentFeatures";
import Partners from "@/components/Partners";

const page = () => {
  return (
    <div className="py-28 flex flex-col justify-center items-center text-black px-20">
      <Hero />
      <InvestmentFeatures />
      <Advantages />
      <Partners />
    </div>
  );
};

export default page;
