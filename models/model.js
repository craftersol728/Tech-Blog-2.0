const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('user', {
  // ...
});

const Post = sequelize.define('post', {
  // ...
});

const Comment = sequelize.define('comment', {
  // ...
});

module.exports = {
  User,
  Post
}