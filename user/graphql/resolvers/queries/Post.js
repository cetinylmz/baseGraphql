const { users, posts, comments } = require("../../../data");

Post = {
  comments: (parent, args) => {
    return comments.filter((key) => key.postId === parent.id);
  },
  author: (parent, args) => {
    return users.filter((key) => key.id === parent.userId);
  },
};

module.exports.Post = Post;
