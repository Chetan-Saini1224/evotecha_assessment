import React from "react";

const Navbar: React.FC = () => {
  const userName: String = "Nick Thomas";
  return (
    <section id="Navbar">
      <div className="flex gap-4 flex-row-reverse p-3 shadow-sm">
        <div>
          <div className=" flex gap-5">
            <p className=" text-slate-500 text-xs py-2">{userName}</p>
            <p className=" bg-green-300 p-2 text-green-500">{userName[0]}</p>
          </div>
        </div>
        <img
          src="/assets/Navbar_Images/Layout-4-blocks.png"
          className=" h-8"
          alt="search"
        />
        <img src="/assets/Navbar_Images/Cart.png" className=" h-8" alt="Cart" />
        <img
          src="/assets/Navbar_Images/Equalizer.png"
          className=" h-8"
          alt="Equalizer"
        />
        <img
          src="/assets/Navbar_Images/Compiling.png"
          className=" h-8"
          alt="Compiling"
        />
        <img
          src="/assets/Navbar_Images/Search.png"
          className=" h-8"
          alt="Search"
        />
      </div>
      <div className=" flex justify-between px-5 p-3 shadow-sm">
        <div className=" flex gap-16">
          <p className="text-sm p-1 font-bold">Dashboard</p>
          <p className=" p-2 rounded-sm text-yellow-400 bg-yellow-100 text-sm">
            Add New
          </p>
        </div>
        <div className="flex gap-4">
          <p className=" p-1 text-sm bg-slate-100 text-blue-600 text-b">
            Today
          </p>
          <p className="p-1">Month</p>
          <p className="p-1 mr-8">Year</p>
          <p className=" p-1 bg-slate-100 text-slate-600">Actions</p>
          <img
            src="/assets/Navbar_Images/Navbar_plus.png"
            className=" h-8"
            alt="Search"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
