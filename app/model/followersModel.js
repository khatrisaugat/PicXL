const sequalize = require("../helpers/db");

const User_Followers = sequalize.define("user_followers", {}, { timestamps: false });

module.exports = User_Followers;