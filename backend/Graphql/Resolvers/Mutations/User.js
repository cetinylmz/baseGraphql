const User = require("../../../Models/User");
const Mutation = {
  createUser: async (parent, { data }) => {
    try {
      const newUser = new User({
        ...data,
      });
      return await newUser.save();
    } catch (error) {
      throw new Error(error);
    }
  },

  updateUser: async (parent, { id, data }) => {
    try {
      const updateUser = await User.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateUser;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteUser: async (parent, { _id }) => {
    try {
      return await User.findByIdAndDelete(_id);
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteAllUsers: async (parent, args) => {
    try {
     const deleteUser = await User.deleteMany({});
     
      return {
        count: deleteUser.deletedCount,
      };
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports.Mutation = Mutation;
