"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "light" | "solid";
  size?: "normal" | "small" | "large";
  className?: string;
  prompt?: React.ReactNode;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "dark",
  size = "normal",
  className = "",
  prompt,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      router.push(link);
    }
  };

  const variantClass =
    variant === "light"
      ? "btn-light"
      : variant === "solid"
      ? "btn-solid"
      : "btn";

  const sizeClass =
    size === "large"
      ? "!px-10 !py-4 !text-lg"
      : size === "small"
      ? "!px-3 !py-1 !text-sm"
      : "";

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${variantClass} ${sizeClass} ${className} cursor-pointer`}
    >
      {text}
      {prompt && <span className="ml-2">{prompt}</span>}
    </button>
  );
};

export default Button;
