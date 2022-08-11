const { users, posts, comments } = require("../../../data");

Comment = {
  author: (parent, args) => {
    return users.filter((key) => key.id === parent.userId);
  },
  post: (parent, args) => {
    return posts.filter((key) => key.id === parent.postId);
  },
};

module.exports.Comment = Comment;
