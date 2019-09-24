const express = require('express');

const app = express();

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Node Express Application');
});

// Listen to port
app.listen(5000, () => {
  console.log('App listening on port 5000!');
});
