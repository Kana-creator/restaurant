const handleSearch = (
  field,
  setSearchField,
  restaurants,
  setRestaurantsLength,
  setSearchResults
) => {
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

  return true;
};
module.exports = handleSearch;
