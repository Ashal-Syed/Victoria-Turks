import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div data-label="Footer Section" className="h-full flex flex-col md:flex-row items-center justify-between pb-4 md:pb-0">
      <div
        data-label="Logo"
        className="h-full flex justify-between items-center py-10 "
      >
        <Link
          href="#hero"
          className="flex justify-center items-center text-xl gap-5"
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />
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
      <div data-label="Right" className="flex flex-col items-center justify-center">
        <div data-label="Social Media Icons" className="h-[20px] lg:h-[50px] lg:w-full flex relative lg:gap-2 justify-center">
          <Image
            src="/icons/Facebook.svg"
            alt="Facebook"
            height={35}
            width={35}
          />
          <Image
            src="/icons/Instagram.svg"
            alt="Instagram"
            height={40}
            width={40}
          />
          <Image
            src="/icons/LinkedIn.svg"
            alt="LinkedIn"
            height={40}
            width={40}
          />
          <Image
            src="/icons/Youtube.svg"
            alt="Youtube"
            height={40}
            width={40}
          />
        </div>
        <div data-label="Webifex" className="flex gap-0.5">
          <p className="text-neutral-400 text-[6px] md:text-xs">
            Website Designed and Maintained by
          </p>
          <Link
            className="text-green-600 text-[6px] md:text-xs"
            href="https://www.webifex.io"
          >
            Webifex
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
