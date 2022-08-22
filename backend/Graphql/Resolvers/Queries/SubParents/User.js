const Car = require("../../../../Models/Car");


const User = {
  cars: async (parent, args) => await Car.find({ user: parent.id }),
};
module.exports.User = User;
