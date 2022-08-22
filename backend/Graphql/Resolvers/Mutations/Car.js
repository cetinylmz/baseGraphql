const Car = require("../../../Models/Car");
const Mutation = {
  createCar: async (parent, { data }) => {
    try {
      const newCar = new Car({
        ...data,
      });
      return await newCar.save();
    } catch (error) {
      throw new Error(error);
    }
  },

  updateCar: async (parent, { id, data }) => {
    try {
      const updateCar = await Car.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateCar;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteCar: async (parent, { _id }) => {
    try {
      return await Car.findByIdAndDelete(_id);
    } catch (error) {
      throw new Error("Error");
    }
  },

  deleteAllCars: async (parent, args) => {
    try {
      const deleteCar = await Car.deleteMany({});

      return {
        count: deleteCar.deletedCount,
      };
    } catch (error) {
      throw new Error("error");
    }
  },
};

module.exports.Mutation = Mutation;
