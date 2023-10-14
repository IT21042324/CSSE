const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Creating an express app
const app = express();

// Configure middleware functions
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.URI;

const purchaseRoutes = require("./routes/purchase");
const inquiryRoutes = require("./routes/inquiry");
const userRoutes = require("./routes/user");

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/purchase", purchaseRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/user", userRoutes);
