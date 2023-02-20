const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
    userId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CLient", clientSchema);
