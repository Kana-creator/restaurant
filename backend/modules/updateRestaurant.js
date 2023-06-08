const fetchRestaurantDetails = async (req, res, Restaurant, id) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body);
    console.log(restaurant);
    return res.json({
      restaurant: [restaurant],
      message: "Restaurant updated successfully.",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = fetchRestaurantDetails;
