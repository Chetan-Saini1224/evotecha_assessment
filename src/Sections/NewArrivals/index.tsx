import React from "react";
import { Arrivals } from "../../Model";
import MembersCard from "./MembersCard";

const NewArrivals: React.FC = () => {
  let data: Arrivals[] = [
    {
      heading: "Sant Outstanding",
      subHeading: "bprow@bnc.cc",
      image: "/assets/images/Arrivals/arrival_1.png",
      price: 200000,
      status: "A",
    },
    {
      heading: "Telegram Application",
      subHeading: "bprow@bnc.cc",
      image: "/assets/images/Arrivals/arrival_2.png",
      price: 460000,
      status: "IP",
    },
    {
      heading: "Cisco Management",
      subHeading: "bprow@bnc.cc",
      image: "/assets/images/Arrivals/arrival_3.png",
      price: 560000,
      status: "S",
    },
    {
      heading: "HR Management",
      subHeading: "bprow@bnc.cc",
      image: "/assets/images/Arrivals/arrival_4.png",
      price: 57000,
      status: "R",
    },
    {
      heading: "KTR Mobile Application",
      subHeading: "bprow@bnc.cc",
      image: "/assets/images/Arrivals/arrival_5.png",
      price: 45200000,
      status: "IP",
    },
  ];
  return (
    <>
      <div className="bg-white p-6">
        <div className="flex justify-between">
          <div>
            <p className=" font-bold ">NewArrivals</p>
            <p className=" text-xs py-4">More than 400+ new members</p>
          </div>
          <div className="flex gap-6">
            <p>Month</p>
            <p className=" text-slate-400">Week</p>
            <p className=" text-slate-400">Day</p>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          {data.map((val, idx) => (
            <MembersCard
              heading={val.heading}
              subHeading={val.subHeading}
              image={val.image}
              price={val.price}
              status={val.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
