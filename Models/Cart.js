const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product: { type: String, require: true },
    user: { type: String, require: true },
    email: { type: String, require: true },
    product_qty: { type: Number, dafault : 1 },
    base_price: { type: Number, require: true },
    sell_price: { type: Number, require: true },
    total_Price: { type: Number, require: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
