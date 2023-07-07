const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("picxl", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
