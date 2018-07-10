const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose')
const credentials = require('./mongodb_CRED.json')
const assert = require('assert')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const app = express();

//DB Connect
const mongoDB = `mongodb://${credentials.env.PW}:${credentials.env.USER}@ds229690.mlab.com:29690/phar`
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//

//Session Connect
const store = new MongoDBStore({
  uri: mongoDB,
  collection: 'mySessions'
})

store.on('connected', function() {
  store.client
})

store.on('error', function () {
  assert.ifError(error),
    assert.ok(false)
})

app.use(session({
  secret: 'foo',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
  },
  store: store,
  saveUninitialized: true, // don't create session until something stored,
  resave: false, //don't save session if unmodified
}));
//

app.use('/', express.static('/Users/nick/Documents/workspace/Personal-Projects/PHAR/phar-frontend/build') )

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json({ extended : true }))
app.use(bodyParser.urlencoded({ extended: true }));

const routes_setter = require("./config/routes.js");
routes_setter(app);

app.listen(port, function() {
  console.log("listening on port: ", port);
})