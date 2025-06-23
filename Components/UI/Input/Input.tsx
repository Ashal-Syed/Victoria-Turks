import Image from "next/image";
import React from "react";

interface InputProps {
    src: string;
    alt: string;
    title: string;
    placeholder: string;
}

const Input = ({src, alt, title, placeholder} : InputProps) => {
  return (
    <div data-label="Field" className="w-full flex flex-col gap-4">
      <div data-label="Content" className="flex items-end gap-2 px-1">
        <Image src={src} alt={alt} height={20} width={20} />
        <h1 className="text-neutral-600 text-sm">{title}</h1>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="input-white"
      />
    </div>
  );
};

export default Input;
