const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  carName: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.ObjectId,
  },
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
