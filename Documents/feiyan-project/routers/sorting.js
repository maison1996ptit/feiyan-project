const express = require('express');
const sorting = express.Router();


sorting.get('/',function(req,res)
{
    res.render('../views/master.ejs');
})

module.exports.sorting = sorting;