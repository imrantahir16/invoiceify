const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: String,
    businessName: String,
    address: String,
    paymentDetails: String,
    logo: String,
    website: String,
    userId: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Profile", profileSchema);
