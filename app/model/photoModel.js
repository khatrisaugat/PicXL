const {DataTypes} = require("sequelize");
const sequalize = require("../helpers/db");
const Category = require("./categoryModel");
const User = require("./userModel");
const Photo_Likes = require("./photoLikesModel");
const Photo = sequalize.define("photos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imageUrl: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    isOriginal: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
});
Category.hasMany(Photo, {
    foreignKey: {
        name: "categoryId",
    }
});
User.hasMany(Photo, {
    foreignKey: {
        name: "publisherId",
    }
});

Photo.belongsToMany(User, { through: Photo_Likes, as: 'likedPictures',foreignKey:'photoId'});
User.belongsToMany(Photo, { through: Photo_Likes, as: 'liker',foreignKey:'likerId'});

(async () => await Photo.sync().then((photo) => Photo_Likes.sync()))();

module.exports = Photo;
