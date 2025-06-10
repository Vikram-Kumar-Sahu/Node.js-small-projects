const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res) => {
    res.send('Welcome to Home Page');
});
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// JSON response
app.get('/json', (req, res) => {
  res.json({ name: 'Vikram', language: 'Node.js' });
});
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});