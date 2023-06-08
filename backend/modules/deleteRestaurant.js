const deleteRestaurant = async (req, res, Restaurant, id, fs, image) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(id);

    let path = `../../frontend/public/images/${image}`;
    fs.unlink(path, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("Deleted");
      }
    });

    return res.json({
      message: "Restaurant deleted successfully",
      status: "success",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = deleteRestaurant;
