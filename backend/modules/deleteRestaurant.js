const deleteRestaurant = async (req, res, Restaurant, id, fs, image) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(id);

    if (restaurant) {
      let path = `../../frontend/public/images/${image}`;
      fs.unlink(path, (error) => {
        if (error) {
          console.log(error.message);
        }
      });
      return res.json({
        message: "Restaurant deleted successfully",
        status: "success",
      });
    } else {
      return res.json({
        message: "Failed to delete the restaurant",
        status: "failed",
      });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = deleteRestaurant;
