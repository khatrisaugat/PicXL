const sequalize = require("../helpers/db");

const PhotoLikes = sequalize.define("photo_likes", {}, { timestamps: false });

module.exports = PhotoLikes;