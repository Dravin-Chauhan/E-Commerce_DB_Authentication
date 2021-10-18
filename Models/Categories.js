const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", categoriesSchema);
