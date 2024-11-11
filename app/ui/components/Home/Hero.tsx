"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation
import NorthernLights from "../NorthernLights";

function Hero() {
  const router = useRouter(); // Initialize the router from next/navigation

  // Function to handle button click and navigate to '/set1'
  const handleGetStartedClick = () => {
    router.push("/set1"); // Navigate to /set1 page
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
      <NorthernLights />
      <div className="w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
        <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
          Ziverium Standard
        </h1>
        <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
          Empowering businesses to unify their operations, optimize their
          strategies, and accelerate growth—all from one intuitive interface.
        </p>
        <button
          onClick={handleGetStartedClick} // Add the onClick handler
          className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2"
        >
          <span>Get Started</span>
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="w-full h-full relative overflow-visible bg-transparent">
        {/* <Spline
          scene="https://prod.spline.design/50s7CDe3XTgTbS2h/scene.splinecode"
          className="bg-red-transparent object-contain h-[700px]"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
