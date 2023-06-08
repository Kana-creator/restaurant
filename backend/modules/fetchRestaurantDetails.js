const fetchRestaurantDetails = async (req, res, Restaurant, id) => {
  try {
    const restaurant = await Restaurant.findById(id);
    return res.json({
      message: "success",
      restaurant: [restaurant],
      status: "success",
    });
  } catch (error) {
    return res.json({ message: error.message, status: "failed" });
  }
};

module.exports = fetchRestaurantDetails;
