import Button from "@/Components/UI/Button/Button";
import Image from "next/image";
import React from "react";

interface EventCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    buttonText: string;
}

const EventCard = ({src, alt, title, description, buttonText}: EventCardProps) => {
  return (
    <div data-label="Card+Photo "className="w-[300px] md:w-[500px] h-[192px] flex justify-end relative">
      <div data-label="Photo Holder" className="hidden absolute bottom-0 left-0 md:left-0 w-[120px] h-[120px] md:w-[192px] md:h-[192px] z-10 md:flex items-end">
        <Image src={src} alt={alt} height={192} width={192} />
      </div>
      <div data-label="Card" className="event-card ">
        <div data-label="Content" className="w-full md:w-3/5 h-full flex flex-col items-start justify-between gap-1 py-5">
          <div data-label="Text" className="w-full flex flex-col items-start gap-1">
            <h1 className="text-white font-semibold text-lg">
              {title}
            </h1>
            <p className="text-white text-xs">
              {description}
            </p>
          </div>
          <Button text={buttonText} variant="light" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
