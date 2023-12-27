import React from "react";
import { Arrivals } from "../../Model";

const MembersCard: React.FC<Arrivals> = ({
  heading,
  subHeading,
  image,
  price,
  status,
}: Arrivals) => {
  return (
    <div className=" flex justify-between">
      <div className="flex gap-2">
        <img src={image} className=" p-2 bg-slate-200" />
        <div>
          <p>{heading}</p>
          <p className="text-xs">
            <span>FTP:</span> {subHeading}
          </p>
        </div>
      </div>
      <div className=" flex gap-8">
        <div className="flex flex-col">
          <p className="">{price.toString()}</p>
          <p className=" text-xs text-slate-500">Paid</p>
        </div>
        {status == "S" && (
          <p className=" bg-green-100 text-green-600 rounded-md p-1">Success</p>
        )}
        {status == "R" && (
          <p className=" bg-red-100 text-red-600 rounded-md p-1">Rejected</p>
        )}
        {status == "IP" && (
          <p className=" bg-yellow-100 text-yellow-600 rounded-md p-1">
            In Progress
          </p>
        )}
        {status == "A" && (
          <p className=" bg-purple-100 text-purple-600 rounded-md p-1">
            Approved
          </p>
        )}
        <div className=" flex gap-2">
          <img
            src="/assets/images/Arrivals/arrival_btn1.png"
            className="h-5/6"
          />
          <img
            src="/assets/images/Arrivals/arrival_btn2.png"
            className="h-5/6"
          />
          <img
            src="/assets/images/Arrivals/arrival_btn3.png"
            className="h-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
