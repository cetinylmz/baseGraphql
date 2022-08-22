const User = require("../../../Models/User");

const Query = {
  users: async () => {
    const users = await User.find({});
    return users;
  },
  user: async (parent, args) => {
    const users = await User.findById(args.id);
    return users;
  },
};

module.exports.Query = Query;
