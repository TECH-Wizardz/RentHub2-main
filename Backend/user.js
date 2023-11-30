const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

let User = new Schema({
    id: {type: String},
    name: { type: String },
    email: { type: String },
    password: { type: String },
});

module.exports = mongoose.model ('User', User);