import Image from "next/image";
import React from "react";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";
import { serviceDataRow1, serviceDataRow2 } from "./ServiceData";

const Services = () => {
  return (
    <section
      data-label="Services Setion"
      id="services"
      className="flex flex-col justify-center items-center gap-7 py-10 px-10"
    >
      <h1 className="heading-text text-4xl font-semibold">Services</h1>
      <p className="px-70 text-center text-neutral-500">
        We offer a range of programs to support, connect, and empower the
        Turkish community in Victoria. From cultural events and education to
        wellbeing and social support, our initiatives are designed to meet the
        needs of all age groups and help individuals feel a sense of belonging.
      </p>
      <div data-label="Row 1" className="w-full h-[350px] flex gap-10">
        <div data-label="Card 1 Div" className="w-6/10">
          <ServiceCard {...serviceDataRow1[0]} />
        </div>
        <div data-label="card 2 div" className="w-4/10 ">
          <ServiceCard {...serviceDataRow1[1]} />
        </div>
      </div>
      <div data-label="Row 2" className="w-full h-[400px] flex gap-10">
        {serviceDataRow2.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
