const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roles", roleSchema);
