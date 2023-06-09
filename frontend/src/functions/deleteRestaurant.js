const handleDelete = (
  id,
  image,
  axios,
  searchField,
  restaurants,
  setRestaurants,
  searchResults,
  setSearchResults,
  setRestaurantsLength
) => {
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

module.exports = handleDelete;
