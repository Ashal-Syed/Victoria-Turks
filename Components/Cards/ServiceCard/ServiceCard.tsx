import Image from 'next/image'
import React from 'react'

interface ServiceCardProps {
    src: string;
    alt: string;
    heading: string;
    text: string;

}

const ServiceCard = ({src, alt, heading, text}: ServiceCardProps) => {
  return (
     <div
                data-label="Card"
                className="small-card"
              >
                <div className="h-[50px] w-[50px] bg-red-50 rounded-lg flex items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    height={40}
                    width={40}
                  />
                </div>
                <h1 className="text-[#FF3232] font-medium text-2xl">
                  {heading}
                </h1>
                <p className="text-neutral-500 text-lg">
                  {text}
                </p>
              </div>
  )
}

export default ServiceCard