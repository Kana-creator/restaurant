const addRestaurant = (req, res) => {
  console.log(req.body);
  return res.json({ message: "connected" });
};

module.exports = addRestaurant;
