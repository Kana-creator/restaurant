const updateRestaurant = async (req, res, Restaurant, id) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(id, {
      restaurant_name: req.body.restaurant_name,
      cuisin_type: req.body.cuisin_type,
      restaurant_location: req.body.restaurant_location,
      restaurant_image: req.body.restaurant_image,
    });
    if (!restaurant) {
      return res.json({ message: `not found ${id}` });
    } else {
      return res.json({ message: "Restaurant updated successfully." });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = updateRestaurant;
