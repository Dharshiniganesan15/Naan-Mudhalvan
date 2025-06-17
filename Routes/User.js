const express = require("express");
const router = express.Router();
const User = require("../Schema/User"); // Ensure this path is correct

// POST /user/create
router.post("/create", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const newUser = new User({ name, email, password, phone });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error registering user", details: error });
  }
});

module.exports = router;
