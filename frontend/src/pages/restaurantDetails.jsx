import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styling/home.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Restaurant from "../components/restaurant";
import axios from "axios";
const RestaurantsDetails = () => {
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

  const { restaurantID } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1000/fetchRestaurantDetails/${restaurantID}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((error) => alert(error));
  }, [restaurantID]);

  const handleDelete = (id, image) => {
    const confirm = window.confirm(
      "Are you sure you want to permanently delete this Restaurant?"
    );
    if (confirm) {
      axios
        .delete(`http://localhost:1000/deleteRestaurant/${id}/${image}`)
        .then((res) => {
          if (res.data.status === "success") {
            navigate("/");
          } else {
            alert(res.data.message);
          }
        });
    }
  };

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
          <h1>Restaurant details</h1>
        </div>

        <div
          className="main-container form"
          style={{ padding: "30px 200px", maxHeight: "100vh" }}
        >
          {restaurant.map((r, i) => (
            <Restaurant
              key={i}
              restaurant={r}
              onDelete={() => handleDelete(r._id, r.restaurant_image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsDetails;
