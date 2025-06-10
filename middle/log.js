const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Custom middleware to validate feedback
function validateFeedback(req, res, next) {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).send('Username and message are required');
  }

  next(); // Proceed to route handler
}
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});


// Route to receive feedback
app.post('/feedback', validateFeedback, (req, res) => {
  const { username, message } = req.body;

  console.log(`Feedback from ${username}: ${message}`);
  res.send(`Thank you for your feedback, ${username}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
