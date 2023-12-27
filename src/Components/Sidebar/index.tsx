import React from "react";
import styles from "./sidebar.module.css";
import Card from "./ValueCard";

const index: React.FC = () => {
  return (
    <section id="sidebar" className={styles.sidebarMain}>
      <div className=" flex bg-[rgba(27, 27, 40, 1)]">
        <p className=" text-white font-bold text-3xl">Dashboard</p>
        <img src="/assets/Sidebar_Images/sidebar_arrow.png" className=" px-3" />
      </div>

      <div className=" flex bg-[rgba(27, 27, 40, 1)]">
        <img
          src="/assets/Sidebar_Images/sidebar_dashboard.png"
          className=" px-3"
        />
        <p className=" text-white">Dashboard</p>
      </div>

      <div>
        <p className=" text-slate-600 text-sm py-5">CUSTOM</p>
        <Card
          val="Applications"
          items={["Users", "Contacts", "Chat"]}
          image="/assets/Sidebar_Images/sidebar_applications.png"
        />
        <Card
          val="Pages"
          items={[]}
          image="/assets/Sidebar_Images/sidebar_pages.png"
        />
      </div>
    </section>
  );
};

export default index;
