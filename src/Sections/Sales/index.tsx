import React from "react";
import SalesCard from "./SalesCard";
import { Sales as Sale } from "../../Model";

const Sales: React.FC = () => {
  let info: Sale[] = [
    {
      heading: "Brivibas Saas",
      subHeading: "PHP,SQLite,ARTISAN CLImm",
      image: "/assets/images/sales/sales_icon.png",
    },
    {
      heading: "Brivibas Saas",
      subHeading: "PHP,SQLite,ARTISAN CLImm",
      image: "/assets/images/sales/sales_icon_2.png",
    },
    {
      heading: "Brivibas Saas",
      subHeading: "PHP,SQLite,ARTISAN CLImm",
      image: "/assets/images/sales/sales_icon_3.png",
    },
    {
      heading: "Brivibas Saas",
      subHeading: "PHP,SQLite,ARTISAN CLImm",
      image: "/assets/images/sales/sales_icon_4.png",
    },
  ];
  return (
    <div className=" flex-1 p-3 bg-white rounded-md">
      <p className=" font-bold mb-3">Sales Progress</p>
      <div className=" p-2 flex flex-col gap-4">
        {info.map((val, idx) => (
          <SalesCard
            heading={val.heading}
            subHeading={val.subHeading}
            image={val.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Sales;
