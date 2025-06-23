"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../../UI/Button/Button";
// import Button from "../UI/Button/Button";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#hero" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Events", path: "#events" },
  ];

  return (
    <nav className="h-full flex justify-between items-center py-5 relative">
      <div
        data-label="Logo"
        className="h-full flex justify-between items-center py-1 lg:py-10 "
      >
        <Link
          href="#hero"
          className="flex justify-center items-center text-xl gap-5"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
          />
          <div data-label="Text" className="flex flex-col items-start">
            <h1 className="font-bold text-red-600 text-xs md:text-xl lg:text-3xl">
              Victoria's Turks
            </h1>
            <p className="hidden lg:block lg:text-[10px] text-neutral-500 font-light">
              Connecting the Turkish Community across Victoria
            </p>
          </div>
        </Link>
      </div>
      {/* Nav Items for large screens */}
      <div className="hidden lg:flex gap-8 items-center text-center">
        {navItems.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            scroll={true}
            className={` ${
              pathname === path
                ? "font-semibold border-b-2 border-red-600 text-red-600"
                : "font-normal"
            } transition`}
          >
            {name}
          </Link>
        ))}
      </div>

            {/* Get Involved Button */}
      <div className="hidden lg:block">
        <Button link="#form" text="Get Involved" />
      </div>

      {/* Hamburger Menu for small/medium screens */}
      <div className="block lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-white shadow-md p-4 flex flex-col gap-3 w-40 z-50">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              scroll={true}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-red-600"
            >
              {name}
            </Link>
          ))}
          <Button link="#form" text="Get Involved" size="small" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
