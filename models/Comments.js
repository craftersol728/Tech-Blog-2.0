const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//This code defines a model class Comment using the Sequelize library. It specifies the columns of the comments table, such as id, comment_text, user_id, and post_id. The user_id and post_id columns are defined as foreign keys, referencing the id columns in the user and post tables, respectively. The Comment model is then exported for use in other parts of the application.
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);
//Jacob is awsome
module.exports = Comment;