const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res) =>{
    res.send('Hello, this is the Home Page!');
});
app.get('/about',(req,res) =>{
    res.send('This is the About Page of [Vikram Kumar Sahu]');
});
app.get('/contact',(req,res) =>{
    res.send('<html><body><h2>Contact Us</h2><p>Email: yourname@example.com</p></body></html>');
});
app.get('/profile',(req,res) =>{
    res.json({name:"Vikram Kumar Sahu", age:22,skill:["Node.js", "Express", "JavaScript"]})
});
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});