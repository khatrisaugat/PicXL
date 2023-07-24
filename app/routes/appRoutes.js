const passport = require("passport");

module.exports = function (app) {
  const user = require("../controller/user/userController");
  console.log(passport.authenticate("jwt", { session: false }));
  app.route("/users").post(user.register_a_user);
  app.route("/users/login").post(user.login_a_user);
  app
    .route("/users/:id")
    .get(
      passport.authenticate("jwt", { session: false }),
      user.get_user_details
    );
};
