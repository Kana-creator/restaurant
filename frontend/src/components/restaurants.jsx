import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        });
    }
  };

  const allRestaurants =
    searchField === ""
      ? restaurants.slice(0, 25).map((restaurant, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{restaurant.restaurant_name}</td>
            <td>{restaurant.cuisin_type}</td>
            <td>{restaurant.restaurant_location}</td>
            <td className="d-flex justify-content-end col-12">
              <Link to={`/restaurantDetails/${restaurant._id}`}>
                <p className="btn btn-outline-info btn-sm my-0 mx-1">Details</p>
              </Link>
              <Link to={`/updateRestaurant/${restaurant._id}`}>
                <p className="btn btn-outline-primary btn-sm my-0 mx-1">
                  Update
                </p>
              </Link>
              <p
                className="btn btn-outline-danger btn-sm my-0 mx-1"
                onClick={() =>
                  handleDelete(restaurant._id, restaurant.restaurant_image)
                }
              >
                Delete
              </p>
            </td>
          </tr>
        ))
      : searchResults.slice(0, 25).map((restaurant, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{restaurant.restaurant_name}</td>
            <td>{restaurant.cuisin_type}</td>
            <td>{restaurant.restaurant_location}</td>
            <td className="d-flex justify-content-end col-12">
              <Link to={`/restaurantDetails/${restaurant._id}`}>
                <p className="btn btn-outline-info btn-sm my-0 mx-1">Details</p>
              </Link>
              <Link to={`/updateRestaurant/${restaurant._id}`}>
                <p className="btn btn-outline-primary btn-sm my-0 mx-1">
                  Update
                </p>
              </Link>
              <p
                className="btn btn-outline-danger btn-sm my-0 mx-1"
                onClick={() =>
                  handleDelete(restaurant._id, restaurant.restaurant_image)
                }
              >
                Delete
              </p>
            </td>
          </tr>
        ));

  return (
    <div>
      <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
        {restaurants.length === 0 ? (
          <p>No restaurant found</p>
        ) : (
          <h4 className="bg-info badge badge-info">{restaurantsLength}</h4>
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

      <table className="table table-striped" border={1}>
        <thead className="bg-secondary">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Cuisin type</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{allRestaurants}</tbody>
      </table>
    </div>
  );
};

export default Restaurants;
