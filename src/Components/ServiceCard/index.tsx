import React from "react";
import { serviceCard as Props } from "../../Model";

const ServiceCard: React.FC<Props> = ({ image, text }: Props) => {
  return (
    <div className="px-5 py-3 flex flex-col gap-4 rounded-md bg-white">
      <div className=" h-3/5">
        <img src={image} alt="service_card" className="m-auto" />
      </div>
      <p className=" text-slate-500 text-center">{text}</p>
    </div>
  );
};

export default ServiceCard;
