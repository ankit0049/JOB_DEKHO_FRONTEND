import React from "react";
import { FaMicrosoft, FaApple, FaChessKnight } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import "./PopularCompanies.css";
const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Capgemini",
      location: "Mumbai , India ",
      openPositions: 81,
      icon: <FaChessKnight />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Pune, India",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "NewYork, USA",
      openPositions: 20,
      icon: <FaApple/>,
    },
  ];

  return (
    <section className="companies">
      <div className="container">
        <h3>Top Companies Hiring Now</h3>
        <div className="banner">
          {companies.map(({ id, icon, title, location, openPositions }) => (
            <div className="card" key={id}>
              <div className="content">
                <div className="icon">{icon}</div>
                <div className="text">
                  <h4>{title}</h4>
                  <p className="location">{location}</p>
                </div>
              </div>
              <button className="open-positions">
                {openPositions} Open Position{openPositions > 1 ? "s" : ""}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCompanies;
