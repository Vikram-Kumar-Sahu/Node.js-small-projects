const express = require('express');
const app = express();

// Middleware that logs the request
const logger = (req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next(); // without next(), it will hang!
};

app.use(logger); // 🔁 Applies to ALL routes

app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

// app.get('/about', (req, res) => {
//   res.send('About Us');
// });

//const checkAuth = (req, res, next) => {
//   const loggedIn = false;
//   if (loggedIn) {
//     next(); // continue
//   } else {
//     res.status(403).send('Not Authorized');
//   }
// };

// app.get('/admin', checkAuth, (req, res) => {
//   res.send('Welcome Admin!');
// });

app.use(express.json()); // Automatically parses JSON request bodies

app.post('/data', (req, res) => {
  console.log(req.body); // directly access JSON data
  res.send('Data received!');
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
