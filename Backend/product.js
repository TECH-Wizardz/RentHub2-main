const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema({
  id: { type: String },
  productName: { type: String },
  location: { type: String },
  price: { type: Number },
  description: { type: String },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Product", Product);
