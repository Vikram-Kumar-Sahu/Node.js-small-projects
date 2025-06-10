const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;  // grabbing route parameter
//   res.send(`User ID requested is: ${userId}`);
// }); 

app.get('/user/:username',(req,res) =>{
    const username = req.params.username;
    res.send(`Welcome ${username}`)
});

app.get('/product/:category/:id',(req,res) =>{
    const {id,category} = req.params;
    res.send(`Product ID: ${id},Category: ${category}`)
});

// app.get('/user/:id/book/:bookId', (req, res) => {
//   const { id, bookId } = req.params;
//   res.send(`User ID: ${id}, Book ID: ${bookId}`);
// });
// app.get('/product/:category/:itemId', (req, res) => {
//   const { category, itemId } = req.params;
//   res.json({
//     category,
//     itemId,
//     message: `You requested item ${itemId} in category ${category}`
//   });
// });

app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});