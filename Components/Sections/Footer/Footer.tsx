import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div data-label="Footer Section" className="h-full flex justify-between">
      <div
        data-label="Logo"
        className="h-full flex justify-between items-center py-10 "
      >
        <Link
          href="#hero"
          className="flex justify-center items-center font-medium text-xl gap-5"
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          <div data-label="Text" className="flex flex-col items-center">
            <h1 className="font-bold text-red-600 text-3xl">
              Victoria's Turks
            </h1>
            <p className="text-[10px] text-neutral-500 font-light">
              Connecting the Turkish Community across Victoria
            </p>
          </div>
        </Link>
      </div>
      <div data-label="Right" className="flex flex-col items-center justify-center">
        <div data-label="Social Media Icons" className="h-[50px] flex relative gap-2">
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
          <p className="text-neutral-400 text-xs">
            Website Designed and Maintained by
          </p>
          <Link
            className="text-green-600 text-xs"
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
