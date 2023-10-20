const express =require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const route =require("./routes/vendorRoute")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use("/api", route)
app.use("/uploads", express.static("uploads"));
app.use((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
  });
mongoose
  .connect("mongodb://localhost:27017", {
  })
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, function () {
  console.log("Express app running on port " + 3000);
});
