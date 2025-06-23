import React from "react";
import Button from "../../UI/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      data-label="Hero Section"
      id="hero"
      className="w-full flex flex-col md:flex-row items-center"
    >
      <div
        data-label="Left Section"
        className="md:w-1/2 h-full flex flex-col gap-4"
      >
        <div className="flex flex-col md:gap-4">
          <h1 className="text-black font-semibold text-3xl md:text-5xl">
            Welcome to
          </h1>
          <h1 className="heading-text text-3xl md:text-5xl font-semibold ">
            Victoria's Turks
          </h1>
        </div>
        <p className="text-neutral-600 text-sm md:text-base">
          Connecting the Turkish community across Victoria, celebrating our
          cultural heritage, and providing ongoing support through programs,
          events, and shared initiatives.
        </p>
        <Button text="See Upcoming Events" link="#events"></Button>
      </div>
      <div
        data-label="Right Section"
        className="hidden md:flex w-1/2 h-fill justify-end items-center"
      >
        <Image src="/hero.svg" alt="Hero Image" height={350} width={350} />
      </div>
    </section>
  );
};

export default Hero;
