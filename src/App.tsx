import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Services from "./Sections/Services";
import Sales from "./Sections/Sales";
import Categories from "./Sections/Categories";
import NewArrivals from "./Sections/NewArrivals";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <main className=" w-4/5">
        <Navbar />
        <div className=" bg-slate-100 min-h-screen h-fit py-6 px-12">
          <Services />
          <div className="flex gap-4 py-6">
            <Categories />
            <Sales />
          </div>
          <div>
            <NewArrivals />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
