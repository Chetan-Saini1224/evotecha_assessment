import React from "react";
import { Sales as Props } from "../../Model";
const SalesCard: React.FC<Props> = ({ heading, subHeading, image }: Props) => {
  return (
    <div className="flex gap-3">
      <img src={image} alt="sales_images" className=" h-1/6" />
      <div>
        <p>{heading}</p>
        <p className=" text-sm text-slate-400">{subHeading}</p>
      </div>
    </div>
  );
};

export default SalesCard;
