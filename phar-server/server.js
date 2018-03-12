const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose')
const mongoDB = `mongodb://${process.env.MONGO_MLAB_USER}:${process.env.MONGO_MLAB_PW}@ds213199.mlab.com:13199/phar`

const app = express();

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const routes_setter = require("./config/routes.js");
routes_setter(app);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
