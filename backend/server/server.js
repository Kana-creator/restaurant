import express from "express";
import fileupload from "express-fileupload";
import cors from "cors";
// import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());

// SAVING DATA FOR A NEW RESTAURANT
app.post("/addRestaurant", (req, res) => {
  console.log(req.body);
  return res.json({ message: "connected" });
});

// FETCHING RESTAURANT INFO

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
      date.getMinutes();

    const fileName = name_ext + "_" + req.files.file.name;
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

app.listen(1000, () => {
  console.log("listening on port 1000");
});
