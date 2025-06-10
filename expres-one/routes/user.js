const express = require("express");
const { handleGetAllUsers,handlegetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateUser } = require('../controllers/user');

const router = express.Router();

// router.get("/users",async(req,res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// });

//rest api 
router.route('/', handleGetAllUsers)
.get(handleGetAllUsers)
.post(handleCreateUser);

router
.route("/id")
.get(handlegetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);





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

module.exports = router;