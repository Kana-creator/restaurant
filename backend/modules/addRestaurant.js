const aadRestaurant = async (req, res, Restaurant) => {
  try {
    const restaurants = await Restaurant.create(req.body);
    if (restaurants) {
      console.log(restaurants);
      return res.json({ message: "connected" });
    } else {
      return res.json({ message: "failed" });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = aadRestaurant;
