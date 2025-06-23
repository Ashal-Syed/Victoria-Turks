import EventCard from "@/Components/Cards/EventCard/EventCard";
import React from "react";
import { EventsData } from "./EventsData";

const Events = () => {
  return (
    <section id="events" className="h-full w-full flex flex-col justify-center items-center gap-10">
      <h1 className="heading-text">Upcoming Events</h1>
      <p className="lg:px-50 text-center text-neutral-500 leading-loose">
        Our events bring the community together to celebrate culture, share
        knowledge, and build connections. From cultural festivals to educational
        workshops and wellbeing seminars, each gathering is an opportunity to
        participate, learn, and engage. Join us at our upcoming events and be
        part of a growing and vibrant Turkish community in Victoria.
      </p>
      <div
        data-label="Cards"
        className="w-full flex flex-wrap items-end justify-center gap-10 "
      >
        {EventsData.map((Events, index) => (
          <EventCard key={index} {...Events} />
        ))}
      </div>
    </section>
  );
};

export default Events;
