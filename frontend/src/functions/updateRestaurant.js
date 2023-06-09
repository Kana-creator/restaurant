const checkRequired = require("./checkRequired");
const uploadImage = require("./uploadImage");

const update_restaurant = (
  axios,
  props,
  restaurant,
  restaurant_img,
  setImgPreview,
  navigate
) => {
  const restaurant_name = document.getElementById("restaurant_name");
  const cuisin_type = document.getElementById("cuisin_type");
  const restaurant_location = document.getElementById("restaurant_location");

  const required_fielsd = [restaurant_name, cuisin_type, restaurant_location];

  if (
    restaurant_name.value.trim().length === 0 ||
    cuisin_type.value.trim().length === 0 ||
    restaurant_location.value.trim().length === 0
  ) {
    checkRequired(required_fielsd);
  } else {
    axios
      .put(
        `http://localhost:1000/updateRestaurant/${props.restaurantID}`,
        restaurant
      )
      .then((res) => {
        uploadImage(axios, restaurant_img);
        setImgPreview(null);
        alert(res.data.message);
        navigate("/");
      })
      .catch((error) => alert(error));
  }
};

module.exports = update_restaurant;
