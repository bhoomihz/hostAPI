const mongoose = require("mongoose");

const siaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  colors: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  featured: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

const SiaStore = new mongoose.model("SiaStore", siaSchema);

module.exports = SiaStore;
