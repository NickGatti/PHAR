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

  app.get("/adoptions", adoptions.view)

  app.get("/questions", questions.view)
  app.post("/questions", jwt({ secret: 'notsosecret' }), questions.create)
  app.put("/questions", jwt({ secret: 'notsosecret' }), questions.edit)
  app.delete("/questions", jwt({ secret: 'notsosecret' }), questions.delete)
};
