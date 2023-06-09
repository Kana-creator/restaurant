import React, { useEffect, useState } from "react";
import TextField from "../formFields/textField";
import ButtonText from "../buttons/buttonText";
import axios from "axios";
import readFileNname from "../functions/readFileName";
import { useNavigate } from "react-router-dom";
import save_restaurant from "../functions/saveRestaurant";
import update_restaurant from "../functions/updateRestaurant";

const RestaurantForm = (props) => {
  const [restaurant, setRestaurant] = useState({
    restaurant_image: "",
    restaurant_name: "",
    cuisin_type: "",
    restaurant_location: "",
  });

  const [restaurant_info, setRestaurantInfo] = useState([]);
  const [restaurant_img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1000/fetchRestaurantDetails/${props.restaurantID}`)
      .then((res) => {
        setRestaurantInfo(res.data.restaurant);
        setRestaurant(res.data.restaurant);
      })
      .catch((error) => alert(error));
  }, [props.restaurantID]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="col-8">
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
        accept="image/*"
        value={
          props.restaurantID
            ? restaurant_info.map((r) => r.restaurant_image)
            : null
        }
        onChange={(e) => {
          setImgPreview(URL.createObjectURL(e.target.files[0]));
          setImg(e.target.files[0]);
          setRestaurant({
            ...restaurant,
            restaurant_image: readFileNname(e.target.value),
          });
        }}
      />

      <img
        src={
          imgPreview !== null
            ? `${imgPreview}`
            : props.restaurantID
            ? `../images/${restaurant_info.map((r) => r.restaurant_image)}`
            : null
        }
        alt="No image"
        className="img-fluid"
      />

      {!props.restaurantID ? (
        <ButtonText
          type="button"
          className="col-md-12 btn btn-md py-2"
          label="Submit data"
          span=""
          id="submit_data"
          style={{ background: "#24536d", color: "#ffffff" }}
          onClick={() =>
            save_restaurant(axios, restaurant_img, restaurant, setImgPreview)
          }
        />
      ) : (
        <ButtonText
          type="button"
          className="col-md-12 btn btn-md py-2"
          label="Update info"
          span=""
          id="update_nfo"
          style={{ background: "#24536d", color: "#ffffff" }}
          onClick={() =>
            update_restaurant(
              axios,
              props,
              restaurant,
              restaurant_img,
              setImgPreview,
              navigate
            )
          }
        />
      )}
    </form>
  );
};

export default RestaurantForm;
