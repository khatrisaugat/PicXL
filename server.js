const express = require("express");
const cors = require('cors')
const passport = require("passport");
const applyPassportStrategy = require("./app/helpers/passport");
const { createServer } = require("http");
require('dotenv').config();
const app = express();
// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your allowed origin
    credentials: true, // Allow credentials (cookies, HTTP authentication)
};
app.use(cors(corsOptions));
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
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

const server = createServer(app);

server.listen(port, () =>
  console.log("express server running on port " + port)
);

const routes = require("./app/routes/appRoutes"); //importing route
routes(app); //register the route
