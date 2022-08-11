const { users, posts, comments } = require("../../../data");

const Query = {
  Users: () => {
    return users;
  },
  User: (_, args) => {
    return users.find((key) => key.id === args.id);
  },

  Posts: () => {
    return posts;
  },
  Post: (_, args) => {
    return posts.find((key) => key.id === args.id);
  },

  Comments: () => {
    return comments;
  },
  Comment: (_, args) => {
    return comments.find((key) => key.id === args.id);
  },
};

module.exports.Query = Query;
