const express = require('express');
const home = express.Router();


home.get('/',function(req,res)
{
    res.render('../views/home.ejs');
})
module.exports.home = home;