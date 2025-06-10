const express = require('express');
const URL = require('../models/url');

const router = express.Router();

router.get('/', async (req, res) => {
    const allurls = await URL.find({});
    return res.render('home', { 
        urls: allurls,
        id: null // Pass id as null to prevent EJS error
    });
});

router.get("/signup",(req,res) =>{
    return res.render("signup");
});
router.get("/login",(req,res) =>{
    return res.render("login");
});

module.exports = router;