const fetchRestaurantDetails = async (req, res, Restaurant, id) => {
  try {
    const restaurant = await Restaurant.findById(id);
    console.log(restaurant);
    return res.json({ restaurant: [restaurant] });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = fetchRestaurantDetails;
