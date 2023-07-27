const passport = require("passport");

module.exports = function (app) {
  const user = require("../controller/user/userController");
  app.route("/users").post(user.register_a_user);
  app.route("/users/login").post(user.login_a_user);
  app
    .route("/users/:id")
    .get(
      passport.authenticate("jwt", { session: false }),
      user.get_user_details
    );
    app.route("/users").get(user.get_all_users);
    app.route("/users/:id").put(user.update_a_user);

  // category routes
  const category = require("../controller/photo/categoryController");
    app.route("/categories").get(category.get_all_categories);
    app.route("/categories/:id").get(category.getCategoryById);
    app.route("/categories").post(category.addCategory);
    app.route("/categories/:id").put(category.updateCategory);

    // photo routes
    const photo = require("../controller/photo/photoController");
    app.route("/photos").get(photo.get_all_photos);
    app.route("/photos/:id").get(photo.get_photos_by_category_id);
    app.route("/photos").post(photo.add_a_photo);
    app.route("/photos/:id").put(photo.update_a_photo);
    app.route("/photos/:id").put(photo.delete_a_photo);


};
