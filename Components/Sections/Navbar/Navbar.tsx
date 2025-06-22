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
      <Link
        href="#hero"
        className="flex flex-col justify-center items-center font-medium text-xl"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <h1 className="font-bold text-red-600 text-xl">
          Victoria's Turks
        </h1>
      </Link>

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
