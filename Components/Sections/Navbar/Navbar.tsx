"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../../UI/Button/Button";
// import Button from "../UI/Button/Button";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "#hero" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Events", path: "#events" },
  ];

  return (
    <nav className=" h-full flex justify-between items-center py-5">
      <div
        data-label="Logo"
        className="h-full flex justify-between items-center py-10 "
      >
        <Link
          href="#hero"
          className="flex justify-center items-center font-medium text-xl gap-5"
        >
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
          <div data-label="Text" className="flex flex-col items-center">
            <h1 className="font-bold text-red-600 text-2xl">
              Victoria's Turks
            </h1>
            <p className="text-[8px] text-neutral-500 font-light">
              Connecting the Turkish Community across Victoria
            </p>
          </div>
        </Link>
      </div>

      <div className="flex gap-8 items-center text-center">
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

      <Button link="#form" text="Get Involved" />
    </nav>
  );
};

export default Navbar;
