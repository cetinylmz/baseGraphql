const Car = require("../../../Models/Car");

const Query = {
  cars: async(parent, args) => {
    const cars = await Car.find({});
    return cars;
  },
  car: async(parent, args) => {
    const cars = await Car.findById(args.id);
    return cars;
  },
  
};

module.exports.Query = Query;
