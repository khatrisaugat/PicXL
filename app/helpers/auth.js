const jwt = require("jsonwebtoken");
exports.extractToken = (req) => {
    if (req.headers.authorization) {
        return req.headers.authorization.split(" ")[1];
    } else return null;
}

exports.decodeToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET);
}