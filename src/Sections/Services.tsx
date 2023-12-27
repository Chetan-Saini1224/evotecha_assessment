import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { serviceCard } from "../Model";

const Services: React.FC = () => {
  let services: serviceCard[] = [
    {
      text: "Saas Application",
      image: "/assets/Services_images/Library.png",
    },
    {
      text: "Main Categories",
      image: "/assets/Services_images/Layout-4-blocks.png",
    },
    {
      text: "Video Tutorials",
      image: "/assets/Services_images/Movie_lane.png",
    },
    {
      text: "Sales Statistics",
      image: "/assets/Services_images/Equalizer.png",
    },
    {
      text: "ARC Security",
      image: "/assets/Services_images/Shield-check.png",
    },
  ];
  return (
    <div className=" flex justify-between">
      {services.map((val, idx) => (
        <ServiceCard key={idx} text={val.text} image={val.image} />
      ))}
    </div>
  );
};

export default Services;
