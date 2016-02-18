'use strict';

const express = require('express');

const app = express();  // start express
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {  // on request, send response
  res.send('Server Running');
});

app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});
