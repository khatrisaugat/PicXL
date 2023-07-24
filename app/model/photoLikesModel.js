const sequalize = require("../helpers/db");

// photo model

const PhotoLikes = sequalize.define("photo_likes", {}, { timestamps: false });

module.exports = PhotoLikes;