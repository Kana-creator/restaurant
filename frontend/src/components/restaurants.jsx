import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import handleSearch from "../functions/searchForRestaurant";
import handleDelete from "../functions/deleteRestaurant";

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
                  handleDelete(
                    restaurant._id,
                    restaurant.restaurant_image,
                    axios,
                    searchField,
                    restaurants,
                    setRestaurants,
                    searchResults,
                    setSearchResults,
                    setRestaurantsLength
                  )
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
                  handleDelete(
                    restaurant._id,
                    restaurant.restaurant_image,
                    axios,
                    searchField,
                    restaurants,
                    setRestaurants,
                    searchResults,
                    setSearchResults,
                    setRestaurantsLength
                  )
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
        <div className="col-md-12 my-2 d-flex justify-content-end align-items-center">
          {restaurants.length === 0 ? (
            <p>No restaurant found</p>
          ) : (
            <h4 className="bg-info badge badge-info">{restaurantsLength}</h4>
          )}
          <input
            type="text"
            className="form-contro col-4"
            id="search_field"
            placeholder="Search for a restaurant..."
            onChange={(e) =>
              handleSearch(
                document.getElementById(e.target.id),
                setSearchField,
                restaurants,
                setRestaurantsLength,
                setSearchResults
              )
            }
            style={{
              border: "3px solid #efefef",
              outline: "none",
              padding: "5px",
            }}
          />
        </div>
      </div>

      <table
        className="table table-bordered table-hover text-center"
        border={1}
      >
        <thead>
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
