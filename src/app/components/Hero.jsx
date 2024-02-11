"use client";
import React from "react";
import CountdownTimer from "./Counter";

const Hero = () => (
  <div className="container mx-auto flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between items-center ">
    <div className="relative xl:h-screen lg:h-screen flex items-center container sm:w-full">
      <section className="mx-4 md:mx-16">
        <h3 className="text-3xl hero-font font-bold tracking-wider md:text-3xl lg:text-4xl xl:text-5xl text-white">
          #Dare2BeDifferent
        </h3>
        <h2 className="text-6xl hero-font-2 tracking-widest md:text-7xl lg:text-8xl xl:text-9xl font-semibold mt-6 text-orange-500 font-family: Spin-cycle">
          Anokha
        </h2>
        <h2 className="text-6xl hero-font-2 tracking-widest md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-orange-500 font-family: Spin-cycle">
          2024
        </h2>
        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold my-6 text-white"></h2>
      </section>
    </div>
    <div className="text-2xl lg:m-20 xl:m-20 z-10 text-white">
      <CountdownTimer />
    </div>
  </div>
);

export default Hero;
