import express from "express";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import fileupload from "express-fileupload";
import cors from "cors";
import addRestaurant from "../modules/addRestaurant.js";
import fetchRestaurants from "../modules/fetchRestaurants.js";
import fetchRestaurantDetails from "../modules/fetchRestaurantDetails.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());

const url = "mongodb://127.0.0.1:27017/Restaurant";

const restaurantSchema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      required: [true, "Please enter restaurant name"],
    },

    cuisin_type: {
      type: String,
      required: [true, "Please enter cuisin type"],
    },

    restaurant_location: {
      type: String,
      required: [true, "Please enter restaurant  location"],
    },

    restaurant_image: {
      type: String,
      required: [true, "Please choose a restaurant inage"],
    },
  },

  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// SAVING DATA FOR A NEW RESTAURANT
app.post("/addRestaurant", (req, res) => {
  addRestaurant(req, res, Restaurant);
});

// FETCHING RESTAURANT INFO
app.get("/fetchRestaurants", (req, res) => {
  fetchRestaurants(req, res, Restaurant);
});

// UPDATING RESTAURANT INFO
app.post("/updateRestaurant", (req, res) => {
  console.log(req.body);
  return res.json({ message: "connected" });
});

// DELETE RESTAURANT
app.post("/deleteRestaurant", (req, res) => {
  console.log(req.body);
  return res.json({ message: "connected" });
});

// FETCH RESTAURANT DETAILS
app.get("/fetchRestaurantDetails/:id", (req, res) => {
  const { id } = req.params;
  req.body.restaurant_id;
  fetchRestaurantDetails(req, res, Restaurant, id);
  console.log(id);
});

// UPDATING RESTAURANT INFO
app.put("/updateRestaurant/:id", (req, res) => {
  const { id } = req.params;
  req.body.restaurant_id;
  fetchRestaurantDetails(req, res, Restaurant, id);
  console.log(id);
});

//  UPLOADING THE RESTAURANT IMAGE TO THE FILE SYSTEM
app.post("/uploadImage", (req, res) => {
  if (req.files) {
    // const date = new Date();

    // const name_ext =
    //   date.getFullYear() +
    //   "_" +
    //   date.getMonth() +
    //   "_" +
    //   date.getDate() +
    //   "_" +
    //   date.getHours() +
    //   "_" +
    //   date.getMinutes();

    const fileName = req.files.file.name;
    const file = req.files.file;
    let uploadPath = "../../frontend/public/images/" + fileName;
    file.mv(uploadPath, (error) => {
      if (error) {
        return res.json({ message: error, status: "failed" });
      } else {
        return res.json({ message: "uploaded", status: "success" });
      }
    });
  } else {
    console.log(req.body);
  }
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database");
    app.listen(1000, () => {
      console.log("listening on port 1000");
    });
  })
  .catch((error) => console.log(error));
