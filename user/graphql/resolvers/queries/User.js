const { users, posts, comments } = require("../../../data");

User = {
  posts: (parent, args) => {
    return posts.filter((key) => key.userId === parent.id);
  },
  comments: (parent, args) => {
    return comments.filter((key) => key.userId === parent.id);
  },
};

module.exports.User = User;
