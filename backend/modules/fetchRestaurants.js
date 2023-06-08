const fetchRestaurants = async (req, res, Restaurant) => {
  try {
    const restaurants = await Restaurant.find({});
    return res.json({ restaurants: restaurants });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = fetchRestaurants;
