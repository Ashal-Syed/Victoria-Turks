import { title } from "process";

export interface Events {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
}

export const EventsData: Events[] = [
  {
    src: "/images/Food.png",
    alt: "Food",
    title: "Turkish Food Festival",
    description: "May 18, 2025 - Central Melbourne",
    buttonText: "View Details",
  },
  {
    src: "/images/Laptop.png",
    alt: "Laptop",
    title: "Youth Seminar",
    description: "May 30, 2025 - Community Center",
    buttonText: "View Details",
  },
  {
    src: "/images/Woman.png",
    alt: "Woman",
    title: "Women Seminar",
    description: "June 15, 2025 - Riverbank Hall",
    buttonText: "View Details",
  },
  {
    src: "/images/Book.png",
    alt: "Notebook",
    title: "Language Workshop",
    description: "July 6, 2025 - Northcote Library Hall",
    buttonText: "View Details",
  },
];
