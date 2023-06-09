const checkRequired = require("./checkRequired");
const clearForm = require("./clearForm");
const uploadImage = require("./uploadImage");

const save_restaurant = (axios, restaurant_img, restaurant, setImgPreview) => {
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
      .then((res) => {
        clearForm(required_fielsd);
        setImgPreview(null);
        alert(res.data.message);
      })
      .catch((error) => alert(error));
  }
};

module.exports = save_restaurant;
