const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res){
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user not found" });
        return res.json(user);
    } catch (err) {
        return res.status(400).json({ error: "Invalid user id" });
    }
}

async function handleUpdateUserById(req,res){
     await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });

    return res.json({status: "Success"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id, { lastName: "Changed" });
    return res.json({status: "Success"});
}

async function handleCreateUser(req,res){
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    try {
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });
        console.log("result", result);
        return res.status(201).json({ msg: "success" });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
    //     return res.status(201).json({ status: "success", id: users.length });
    // });
}

module.exports ={
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser,
}