const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//register a user
exports.register_a_user = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  // console.log(req.body);
  (async () => {
    const user = await User.findOne({
      where: {
        email: request.email,
      },
    });
    if (user) {
      res.json({ message: "User already exists" });
    } else {
      try {
        request.password = await bcrypt.hash(request.password, 10);
        // const request = JSON.parse(JSON.stringify(req.body));
        await User.create(request);
        const newUser = await User.findOne({
          where: {
            email: request.email,
          },
        });
        const token = jwt.sign({ id: newUser.id }, "secret", {
          expiresIn: 86400, // expires in 24 hours
        });
        const userToReturn = { ...newUser.toJSON(), ...{ token } };
        delete userToReturn.password;
        res.status(200).json(userToReturn);
      } catch (err) {
        res.json({ message: "something went wrong" });
      }
    }
  })();
};

//login a user
exports.login_a_user = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    try {
      const user = await User.findOne({
        where: {
          email: request.email,
        },
      });
      if (user) {
        if (await bcrypt.compare(request.password, user.password)) {
          const token = jwt.sign({ id: user.id }, "secret", {
            expiresIn: 86400, // expires in 24 hours
          });
          const userToReturn = { ...user.toJSON(), ...{ token } };
          delete userToReturn.password;
          res.status(200).json(userToReturn);
        } else res.json({ message: "Username or password incorrect" });
      } else res.json({ message: "Username or password incorrect" });
    } catch (err) {
      res.json({ message: "something went wrong" });
    }
  })();
};

//get user details
exports.get_user_details = (req, res) => {
  (async () => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        const userToReturn = { ...user.toJSON() };
        delete userToReturn.password;
        res.status(200).json(userToReturn);
      } else res.json({ message: "User not found" });
    } catch (err) {
      res.json({ message: "something went wrong" });
    }
  })();
};
