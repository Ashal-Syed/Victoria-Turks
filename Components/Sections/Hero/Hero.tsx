import React from "react";
import Button from "../../UI/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section data-label="Hero Section" id="hero" className="w-full text-white flex items-center">
      <div data-label="Left Section" className="w-1/2 h-full flex flex-col gap-4">
        <h1 className="text-black font-semibold text-5xl">Welcome to</h1>
        <h1 className="heading-text text-5xl font-semibold">
          Victoria's Turks
        </h1>
        <p className="text-neutral-600 ">
          Connecting the Turkish community across Victoria, celebrating our
          cultural heritage, and providing ongoing support through programs,
          events, and shared initiatives.
        </p>
        <Button text="See Upcoming Events" link="#events"></Button>
      </div>
      <div data-label="Right Section" className="w-1/2 h-fill flex justify-end items-center">
      <Image src="/hero.svg" alt="Hero Image" height={400} width={400} />
      </div>
    </section>
  );
};

export default Hero;
