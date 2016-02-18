'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();  // start express
const port = process.env.PORT || 3000;
const Note = mongoose.model('Notes', mongoose.Schema({  // model
  title: String,
  text: String
}));

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({  // for parsing form
  extended: false
}));

app.get('/', (req, res) => {  // on request, send response
  res.send('Server Running');
});

// ROUTES
app.get('/notes/new', (req, res) => {  // for 'new' action
  res.render('new-note');  // serve up the form
});

app.post('/notes', (req, res) => {  // for 'post' action
  Note.create(req.body, (err) => {
    if (err) throw err;
    console.log(req.body);
    res.redirect('/');
  });
});


mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
