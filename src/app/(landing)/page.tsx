"use client";

import Advantages from "@/components/Advantages";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import InvestmentFeatures from "@/components/InvestmentFeatures";
import MiscFeatures from "@/components/MiscFeatures";
import Partners from "@/components/Partners";

const page = () => {
  return (
    <div className="py-28 flex flex-col justify-center items-center text-black px-20">
      <Hero />
      <InvestmentFeatures />
      <Advantages />
      <Partners />
      <Cta />
      <MiscFeatures />
    </div>
  );
};

export default page;
