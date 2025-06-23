import Image from "next/image";
import React from "react";
import Button from "../../UI/Button/Button";

const About = () => {
  return (
    <section
      data-label="About Section"
      id="about"
      className="w-full big-card flex flex-col gap-4 "
    >
      <div data-label="Heading" className="flex justify-center">
        <h1 className="bg-gradient-to-tl from-red-600 to-red-300 bg-clip-text text-transparent font-medium text-xl md:text-4xl">About Us:</h1>
        <h1 className="text-black font-medium text-xl md:text-4xl ml-2">Who Are We?</h1>
      </div>
      <div data-label="Content" className="flex flex-col lg:flex-row h-full justify-between items-center gap-5">
        <div data-label="Photo" className="hidden lg:block w-1/3 h-full">
          <Image
            src="/about.jpg"
            alt="Istanbul"
            // fill
            height={600}
            width={800}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div data-label="Right" className="w-full lg:w-2/3 h-full flex flex-col justify-center px-5 gap-4">
          <p className="p-text">
            Victoria’s Turks is a community organisation committed to preserving
            and promoting the rich cultural heritage of Turkish Australians
            living in Victoria. We aim to foster a strong sense of identity,
            belonging, and connection through cultural events, education, and
            community support. Our work brings together individuals and families
            across generations to celebrate traditions, share knowledge, and
            support one another in meaningful ways. Whether through language
            programs, festivals, or social initiatives, we strive to create an
            inclusive space where culture thrives and community grows.
          </p>
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default About;
