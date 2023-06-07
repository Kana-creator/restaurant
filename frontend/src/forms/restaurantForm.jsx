import React, { useState } from "react";
import TextField from "../formFields/textField";
import ButtonText from "../buttons/buttonText";

import axios from "axios";
import checkRequired from "../functions/checkRequired";
import uploadImage from "../functions/uploadImage";
import readFileNname from "../functions/readFileName";

const RestaurantForm = (props) => {
  const [restaurant, setRestaurant] = useState({
    restaurant_image: "",
    restaurant_name: "",
    cuisin_type: "",
    restaurant_location: "",
  });

  const [restaurant_info, setRestaurantInfo] = useState([]);

  const [restaurant_img, setImg] = useState(null);

  const save_restaurant = () => {
    const restaurant_name = document.getElementById("restaurant_name");
    const cuisin_type = document.getElementById("cuisin_type");
    const restaurant_location = document.getElementById("restaurant_location");
    const restaurant_image = document.getElementById("restaurant_image");

    const required_fielsd = [
      restaurant_image,
      restaurant_name,
      cuisin_type,
      restaurant_location,
    ];

    if (
      restaurant_image.value.trim().length === 0 ||
      restaurant_name.value.trim().length === 0 ||
      cuisin_type.value.trim().length === 0 ||
      restaurant_location.value.trim().length === 0
    ) {
      checkRequired(required_fielsd);
    } else {
      uploadImage(axios, restaurant_img);
      axios
        .post("http://localhost:1000/addRestaurant", restaurant)
        .then((res) => alert(res.data.message))
        .catch((error) => alert(error));
    }
  };

  return (
    <form action="" className="col-8">
      <TextField
        type="text"
        className="col-md-12"
        lable="Restaurant name"
        span="*"
        placeholder="Enter the restaurant name here"
        id="restaurant_name"
        value={
          props.restaurantID
            ? restaurant_info.map((r) => r.restaurant_name)
            : null
        }
        onChange={(e) =>
          setRestaurant({ ...restaurant, restaurant_name: e.target.value })
        }
      />
      <TextField
        type="text"
        className="col-md-12"
        lable="
        Cuisin type"
        span="*"
        placeholder="Enter the cuisin type here"
        id="cuisin_type"
        value={
          props.restaurantID ? restaurant_info.map((r) => r.cuisin_type) : null
        }
        onChange={(e) =>
          setRestaurant({ ...restaurant, cuisin_type: e.target.value })
        }
      />
      <TextField
        type="text"
        className="col-md-12"
        lable="Restaurant location"
        span="*"
        placeholder="Enter the restaurant location here"
        id="restaurant_location"
        value={
          props.restaurantID
            ? restaurant_info.map((r) => r.restaurant_location)
            : null
        }
        onChange={(e) =>
          setRestaurant({ ...restaurant, restaurant_location: e.target.value })
        }
      />
      <TextField
        type="file"
        className="col-md-12"
        lable="Restaurant image"
        span="*"
        id="restaurant_image"
        value={
          props.restaurantID
            ? restaurant_info.map((r) => r.restaurant_image)
            : null
        }
        onChange={(e) => {
          // setCompanyLogo(e.target.files[0]);
          setImg(e.target.files[0]);
          setRestaurant({
            ...restaurant,
            restaurant_image: readFileNname(e.target.value),
          });
        }}
      />

      <ButtonText
        type="button"
        className="col-md-12 btn btn-primary btn-md py-2"
        label="Submit data"
        span=""
        id="submit_data"
        onClick={save_restaurant}
      />
    </form>
  );
};

export default RestaurantForm;
