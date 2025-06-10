const {v4:uuidv4 } = require('uuid');
const User = require("../models/user");
const URL = require("../models/url"); // Add this line
const {setUser}= require('../service/auth');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    const allurls = await URL.find({});
    return res.render("home", {
        urls: allurls,
        id: null // No short URL generated on signup
    });
}

async function handleUserLogin(req, res) {
    const {  email, password } = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if(!user)
        return res.render("login",{
    error: "Invalid Username or Password"
});
const sessionId = uuidv4();
setUser(sessionId,user);
res.cookie("uid",session);

    const allurls = await URL.find({});
    return res.render("home", {
        urls: allurls,
        id: null // No short URL generated on signup
    });
}
module.exports = {
    handleUserSignup,
    handleUserLogin,
}