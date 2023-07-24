const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
const JwtStrategy = require("passport-jwt").Strategy;

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        password = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
