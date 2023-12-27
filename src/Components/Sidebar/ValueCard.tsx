import React, { useState } from "react";
import styles from "./sidebar.module.css";

interface Props {
  val: String;
  items: String[];
  image: string;
}

const Card: React.FC<Props> = ({ val, items, image }: Props) => {
  const [show, setShow] = useState<Boolean>(true);
  return (
    <div>
      <div className=" flex justify-between">
        <div className="flex">
          <img src={image} className=" px-3" />
          <p className=" text-white p-1">{val}</p>
        </div>
        <p className=" text-white" onClick={() => setShow((prev) => !prev)}>
          <img src="/assets/Sidebar_Images/DownArrow.png" className=" p-3" />
        </p>
      </div>
      <div className={show ? " block" : " hidden"}>
        {items.map((val) => (
          <div className=" p-3 text-sm flex justify-between text-slate-600 ml-6 mt-1 mb-2">
            <p>{`- ${val}`}</p>
            <p>{">"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
