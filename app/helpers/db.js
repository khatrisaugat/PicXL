const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("picxl", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
