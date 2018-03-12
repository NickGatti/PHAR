//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");
const adoptions = require("../controllers/adoptions.js");

module.exports = function(app) {
  app.get("/", index.view);
  app.post("/register", users.register)
  app.post("/auth", users.auth)
  app.get("/adoptions", adoptions.view)
};
