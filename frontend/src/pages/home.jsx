import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styling/home.css";
import { Link } from "react-router-dom";
import Restaurants from "../components/restaurants";
const Home = () => {
  const [links, setLinks] = useState([
    {
      title: "Restaurants",
      link: "/",
    },
    {
      title: "Add a Restaurant",
      link: "/addRestaurant",
    },
  ]);
  return (
    <div className="container-fluid col-12 d-flex fles-wrap justify-conent-center align-items-center">
      <div className="sideBar col-md-3">
        <div className="head d-flex flex-wrap align-items-center">
          <div className="">
            <img
              src={`../images/Anatoli.jpg`}
              alt="nn"
              className="img-fluid"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <h6 className="text-info">Anatoli</h6>
          </div>
          <button className="btn btn-outline-info btn-sm">Sign out</button>
        </div>
        <div className="links">
          {links.map((link, index) => (
            <div key={index} className="link col-12 text-left">
              <Link to={`${link.link}`} className="link-inner">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="body col-md-9 alert-danger">
        <div className="titleBar text-center">
          <h1>Restaurants</h1>
        </div>
        <div className="main-container restaurants">
          <Restaurants />
        </div>
      </div>
    </div>
  );
};

export default Home;
