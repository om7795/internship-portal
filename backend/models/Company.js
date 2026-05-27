const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    gstNumber: { type: String, required: true },
    isoNumber: { type: String },
    website: { type: String },
    address: { type: String },
    certificate: { type: String },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Verified", "Rejected"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);