import React from "react";
import { Link } from "react-router-dom";
import ButtonText from "../buttons/buttonText";

const Restaurant = (props) => {
  const { restaurant } = props;
  return (
    <div className="py-3 d-flex flex-wrap  align-items-center ">
      <div className="col-md-12 mr-1">
        <img
          src={`../images/${restaurant.restaurant_image}`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-12 ml-1 p-3">
        <h4 className="col-12">{restaurant.restaurant_name}</h4>
        <p className="col-12">{restaurant.cuisin_type}</p>
        <p className="col-12">{restaurant.restaurant_location}</p>
      </div>
      <div className="action-div col-md-12 d-flex">
        <Link to={`/updateRestaurant/${restaurant._id}`}>
          <ButtonText
            type="button"
            label="Update"
            className="btn btn-sm btn-primary "
            style={{ maxHeight: "30px" }}
          />
        </Link>
        <ButtonText
          type="button"
          label="Delete"
          className="btn btn-sm btn-danger mx-1"
          style={{ maxHeight: "30px" }}
          onClick={props.onDelete}
        />
      </div>
    </div>
  );
};

export default Restaurant;
