const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: Number, require: true, unique: true },
    total_items: { type: Number, require: true },
    product: { type: String, require: true },
    billing_address: { type: String, require: true },
    shipping_address: { type: String, require: true },
    transaction_status: { type: String, require: true },
    payment_mode: { type: String, require: true },
    payment_status: { type: String, require: true },
    other_status: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
