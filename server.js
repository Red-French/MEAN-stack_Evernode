'use strict';

const bodyParser = require('body-parser');  // strips header info, supplies body
const express = require('express');
const methodOverride = require('method-override');  // alias for unavailable http methods
const mongoose = require('mongoose');  // provides useful methods for mongoDB

const logger = require('./lib/logger');
const note = require('./routes/note');
const category = require('./routes/category.js');

const app = express();  // start express
const port = process.env.PORT || 3000;  // dynamic port

app.set('view engine', 'jade');  // use jade engine so jade use is available


// MIDDLEWARE
app.use(bodyParser.urlencoded({  // for special characters
  extended: false
}));
app.use(methodOverride('_method'));  // allow PUT or DELETE if not supported by client
app.use(logger);

// app.get('/', (req, res) => {  // on request, send response
  // res.send('Server Running');
// });

app.use(note);  // use these routes: routes/note.js
app.use(category);


mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});