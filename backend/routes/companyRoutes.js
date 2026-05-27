const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

router.post("/register", async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();

    res.status(201).json({
      success: true,
      message: "Company registered successfully",
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;