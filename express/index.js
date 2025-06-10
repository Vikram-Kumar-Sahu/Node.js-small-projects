const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 




app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
        `${Date.now()}:${req.method}: ${req.path} \n`,
        (err) => {
            if (err) {
                console.error('Logging failed:', err);
                // Optionally send a response or call next(err)
            }
            next();
        }
    );
});


//rest api 
app.get('/api/users',(req,res) => {
    return res.json(users);
});
app.get("/users",(req,res) =>{
    const html =`
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
});
// app.get("/api/users/:id",(req,res) =>{
//     const id = Number(req.params.id);
//     const user =users.find((user) => user.id === id);
//     return res.json(user);
// });

app.post("/api/users",(req,res) => {
     const body = req.body;
    users.push({...body,id:users.length +1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        return res.status(201).json({status:"success",id: users.length});
    })
    
   
}); 

// app.patch("/api/users/:id", (req, res) => {
//     const userId = parseInt(req.params.id);
//     const updatedData = req.body;

//     const userIndex = users.findIndex(user => user.id === userId);
//     if (userIndex === -1) {
//         return res.status(404).json({ status: "error", message: "User not found" });
//     }

//     users[userIndex] = { ...users[userIndex], ...updatedData };

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
//         if (err) return res.status(500).json({ status: "error", message: "Failed to update file" });
//         return res.json({ status: "success", data: users[userIndex] });
//     });
// });

// app.delete("/api/users/:id",(req,res) => {
//     return res.json({status:"pending"});
// });

// app.delete("/api/users/:id", (req, res) => {
//     const userId = parseInt(req.params.id);

//     const userIndex = users.findIndex(user => user.id === userId);
//     if (userIndex === -1) {
//         return res.status(404).json({ status: "error", message: "User not found" });
//     }

//     const deletedUser = users.splice(userIndex, 1);

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
//         if (err) return res.status(500).json({ status: "error", message: "Failed to update file" });
//         return res.json({ status: "success", data: deletedUser[0] });
//     });
// });


// app.route('/api/users/:id').get((req,res) =>{
//     const id = Number(req.params.id);
//     const user =users.find((user) => user.id === id);
//     return res.json(user);
// })
// .post((req,res) => {
//     return res.json({status:"pending"});
// })
// .delete((req,res) =>{
//     return res.json({status:"pending"});
// })

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});