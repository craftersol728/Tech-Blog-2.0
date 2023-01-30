const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'asdpig#6463',
    email: 'dingding1@gmail.com',
    password: 'password'
  },
  {
    username: 'basedlol#3479',
    email: 'dingding2@gmail.com',
    password: 'password'
  },
  {
    username: 'Jeffery#2704',
    email: 'dingding3@gmail.com',
    password: 'password'
  },
  {
    username: 'Junhh#1613',
    email: 'dingding4@gmail.com',
    password: 'password'
  },
  {
    username: 'sake#8811',
    email: 'dingding5@gmail.com',
    password: 'password'
  },
  {
    username: 'Umair#8098',
    email: 'dingding6@gmail.com',
    password: 'password'
  },
  {
    username: 'mshoReiyuken#1164',
    email: 'dingding7@gmail.com',
    password: 'password'
  },
  {
    username: 'SkyTenshi#3988',
    email: 'dingding8@gmail.com',
    password: 'password'
  },
  {
    username: 'Joe#5838',
    email: 'dingding9@gmail.com',
    password: 'password'
  },
  {
    username: 'Silversong#3470',
    email: 'dingding0@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
//The code defines a function seedUsers that seeds a database table called User with data from an array userdata. The bulkCreate method of the User model is used to insert multiple records into the User table in a single call, which is more efficient than inserting records one by one. The {individualHooks: true} option tells the bulkCreate method to run individual hook functions (such as beforeCreate, afterCreate, etc.) for each record in the userdata array, rather than running the hooks just once for all records. This allows for more fine-grained control over the behavior of the hook functions, such as validating and transforming data for each individual record. The purpose of this code is to efficiently seed the User database table with a large set of data, while also preserving the ability to run individual hook functions for each record.

module.exports = seedUsers;