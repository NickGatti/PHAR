//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");
const adoptions = require("../controllers/adoptions.js");
const questions = require("../controllers/questions.js");
const jwt = require('express-jwt')

module.exports = function(app) {
  app.get("/", index.view);

  app.post("/register", users.register)
  app.post("/auth", users.auth)

  app.get("/adoptions", jwt({ secret: 'notsosecret' }), adoptions.view)

  app.get("/questions", questions.view)
  app.post("/questions", questions.create)
  app.put("/questions", questions.edit)
  app.delete("/questions", questions.delete)
};
