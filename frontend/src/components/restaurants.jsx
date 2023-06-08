import React, { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./restaurant";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsLength, setRestaurantsLength] = useState(0);
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/fetchRestaurants")
      .then((res) => {
        setRestaurants(res.data.restaurants);
        setRestaurantsLength(res.data.restaurants.length);
      })
      .catch((error) => alert(error));
  }, []);

  const handleSearch = (field) => {
    setSearchField(field.value);
    const newRestaurants = restaurants.filter(
      (rest) =>
        rest.restaurant_name.toLowerCase().includes(field.value) ||
        rest.restaurant_location.toLowerCase().includes(field.value) ||
        rest.cuisin_type.toLowerCase().includes(field.value)
    );

    if (field.value === "") {
      setRestaurantsLength(restaurants.length);
    } else {
      setSearchResults(newRestaurants);
      setRestaurantsLength(newRestaurants.length);
    }
  };

  const handleDelete = (id, image) => {
    const confirm = window.confirm(
      "Are you sure you want to permanently delete this Restaurant?"
    );
    if (confirm) {
      axios
        .delete(`http://localhost:1000/deleteRestaurant/${id}/${image}`)
        .then((res) => {
          if (res.data.status === "success") {
            var newRestaurants;
            if (searchField === "") {
              newRestaurants = restaurants.filter((rest) => rest._id !== id);
              setRestaurants(newRestaurants);
            } else {
              newRestaurants = searchResults.filter((rest) => rest._id !== id);
              setSearchResults(newRestaurants);
            }
            setRestaurantsLength(newRestaurants.length);
          } else {
            alert(res.data.message);
          }
        });
    }
  };

  const allRestaurants =
    searchField === ""
      ? restaurants.map((restaurant, index) => (
          <Restaurant
            key={index}
            restaurant={restaurant}
            onDelete={() =>
              handleDelete(restaurant._id, restaurant.restaurant_image)
            }
          />
        ))
      : searchResults.map((restaurant, index) => (
          <Restaurant
            key={index}
            restaurant={restaurant}
            onDelete={() =>
              handleDelete(restaurant._id, restaurant.restaurant_image)
            }
          />
        ));

  return (
    <div>
      <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
        {restaurants.length === 0 ? (
          <p>No restaurant found</p>
        ) : (
          <h1>{restaurantsLength}</h1>
        )}

        <div className="col-md-4">
          <input
            type="text"
            className="form-control col-12"
            id="search_field"
            placeholder="Search for a restaurant..."
            onChange={(e) => handleSearch(document.getElementById(e.target.id))}
            style={{ border: "10px solid #efefef", outline: "none" }}
          />
        </div>
      </div>
      {allRestaurants}
    </div>
  );
};

export default Restaurants;
