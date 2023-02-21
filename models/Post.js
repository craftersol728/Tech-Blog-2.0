const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const moment = require('moment');
class Post extends Model {};

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_content: {
    type: DataTypes.STRING(750),
    validate: {
      len: [1]
    },
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id"
    }
  },
  created_at: {
    type: DataTypes.DATE,
    default: moment().format('')
  }
}, {
  sequelize,
  modelName: "post",
  freezeTableName: true,
  underscored: true
});



module.exports = Post;