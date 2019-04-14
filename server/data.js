//Database Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = new Schema(
 {
	    _id: Number,
        id: Number,
        Product: String,
        Color: String,
	    Price: Number
  },
    { collection: 'products' }
);

module.exports = mongoose.model("Data", DataSchema);