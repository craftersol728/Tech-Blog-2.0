const Sequelize = require('sequelize');
//This is a JavaScript code using the Sequelize library to connect to a MySQL database. The code starts by requiring the Sequelize library and the dotenv library, which loads environment variables from a .env file.
require('dotenv').config();
//Then, the code creates a new Sequelize instance, and connects to either a JAWSDB database (if the JAWSDB_URL environment variable is set) or a local MySQL database. The connection details such as database name, username, password, host, and dialect are stored in environment variables defined in a .env file.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    });
//Finally, the sequelize instance is exported so that it can be used in other parts of the application.
module.exports = sequelize;