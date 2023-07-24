const {DataTypes} = require("sequelize");
const sequalize = require("../helpers/db");
User_Followers= require("./followersModel");
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
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "",
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "basic",
    }
});
User.belongsToMany(User, {
    through: User_Followers,
    as: 'followers',
    foreignKey: 'followeeId'
});

User.belongsToMany(User, {
    through: User_Followers,
    as: 'following',
    foreignKey: 'followerId'
});
(async () => await User.sync().then((user) => User_Followers.sync()))();

module.exports = User;
