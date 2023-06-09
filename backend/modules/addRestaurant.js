const aadRestaurant = async (req, res, Restaurant) => {
  try {
    const restaurants = await Restaurant.create(req.body);
    if (restaurants) {
      return res.json({
        message: "Restaurant has been added successfully.",
        status: "success",
      });
    } else {
      return res.json({ message: "failed", status: "failed" });
    }
  } catch (error) {
    return res.json({ message: error.message, status: "failed" });
  }

  return true;
};

module.exports = aadRestaurant;
