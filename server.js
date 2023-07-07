const express = require("express");
const passport = require("passport");
const applyPassportStrategy = require("./app/helpers/passport");
const { createServer } = require("http");
const app = express();
const port = process.env.PORT || 3001;
// connection configurations
const db = require("./app/helpers/db");

// connect to database
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

applyPassportStrategy(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = createServer(app);

server.listen(port, () =>
  console.log("express server running on port " + port)
);

const routes = require("./app/routes/appRoutes"); //importing route
routes(app); //register the route
