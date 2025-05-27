import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import "./PopularCategories.css";
const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "UI/UX & Graphic Design",
      subTitle: "320 Jobs Available",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "545 Jobs Available",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Engineering",
      subTitle: "215 Jobs Available",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN Stack Development",
      subTitle: "1,200+ Jobs Available",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Finance & Accounting",
      subTitle: "180 Jobs Available",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      subTitle: "950 Jobs Available",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Production & Animation",
      subTitle: "75 Jobs Available",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Design & Development",
      subTitle: "95 Jobs Available",
      icon: <IoGameController />,
    },
  ];

  return (
    <div className="categories">
      <h3 className="section-title">Explore Popular Job Categories</h3>
      <div className="banner">
        {categories.map((item) => (
          <div className="card" key={item.id}>
            <div className="icon">{item.icon}</div>
            <div className="text">
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
