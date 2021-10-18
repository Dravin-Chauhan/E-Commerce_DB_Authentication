const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    thumbnail: { type: String, require: true },
    product_gallery: { type: String, require: true },
    description: { type: String, require: true },
    base_price: { type: Number, require: true },
    sell_price : {type : Number, require: true},
    category_name : {type : String, require : true},
    tags : { type : String, require : true},
    additional_information : { type : String, require : true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
