import express from "express";
import mongoose from "mongoose";
import fileupload from "express-fileupload";
import cors from "cors";
import fs from "fs";
import addRestaurant from "../modules/addRestaurant.js";
import fetchRestaurants from "../modules/fetchRestaurants.js";
import fetchRestaurantDetails from "../modules/fetchRestaurantDetails.js";
import updateRestaurant from "../modules/updateRestaurant.js";
import deleteRestaurant from "../modules/deleteRestaurant.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

// FETCH RESTAURANT DETAILS
app.get("/fetchRestaurantDetails/:id", (req, res) => {
  const { id } = req.params;
  fetchRestaurantDetails(req, res, Restaurant, id);
});

// UPDATING RESTAURANT INFO
app.put("/updateRestaurant/:id", (req, res) => {
  const { id } = req.params;
  updateRestaurant(req, res, Restaurant, id);
});

// DELETING A RESTAURANT
app.delete("/deleteRestaurant/:id/:image", (req, res) => {
  const { id } = req.params;
  const { image } = req.params;
  deleteRestaurant(req, res, Restaurant, id, fs, image);
});

//  UPLOADING THE RESTAURANT IMAGE TO THE FILE SYSTEM
app.post("/uploadImage", (req, res) => {
  if (req.files) {
    const date = new Date();

    const name_ext =
      date.getFullYear() +
      "_" +
      date.getMonth() +
      "_" +
      date.getDate() +
      "_" +
      date.getHours() +
      "_" +
      date.getMinutes() +
      "_";

    const fileName = req.files.file.name;
    const file = req.files.file;
    let uploadPath = "../../frontend/public/images/" + fileName;
    file.mv(uploadPath, (error) => {
      if (error) {
        return res.json({ message: error, status: "failed" });
      } else {
        return res.json({ message: "success", status: "success" });
      }
    });
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
