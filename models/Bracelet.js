const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const braceletSchema = new Schema({
  modelName: {
    type: String,
    required: true,
  },
  modelNo: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
  },
  collectionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs or paths
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  diameter: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update 'updatedAt' field before saving
braceletSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

braceletSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.productId = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Bracelet", braceletSchema);
