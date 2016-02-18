'use strict';

const bodyParser = require('body-parser');
const express = require('express');


const app = express();  // start express
const port = process.env.PORT || 3000;

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
  console.log(req.body);
  res.redirect('/');
});



app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});
