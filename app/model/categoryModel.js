const {DataTypes} = require("sequelize");
const sequalize = require("../helpers/db");

const Category = sequalize.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryname: {
        type: DataTypes.STRING,
    },
    status:{
        type:DataTypes.BOOLEAN,
        default:true
    }

});
(async () => await Category.sync())();

module.exports = Category;
