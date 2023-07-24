// module.exports = (passport) => {
const User = require("../model/userModel");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

const applyPassportStrategy = (passport) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = process.env.JWT_SECRET;
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        const user = await User.findOne({
          where: {
            id: jwt_payload.id,
          },
        });
        if (user) {
          console.log("user found in db in passport");
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      } catch (err) {
        console.log("error in passport");
        done(err, false);
      }
    })
  );
};
module.exports = applyPassportStrategy;
