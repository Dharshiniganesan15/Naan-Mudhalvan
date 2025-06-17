const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/User");

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount user-related routes at /user
app.use("/user", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://dharshiniganesan1515:Dharsh15@cluster0.qfsnzlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
