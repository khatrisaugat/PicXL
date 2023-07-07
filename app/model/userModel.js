const { DataTypes } = require("sequelize");
const sequalize = require("../helpers/db");

const User = sequalize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});
(async () => await User.sync())();

module.exports = User;
