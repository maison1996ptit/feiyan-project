const express = require('express');
const app = express();
const server = require('http').createServer();
const bodyParse = require('body-parser')
const expressLayout = require('express-ejs-layouts');
require('dotenv').config();
const PORT = process.env.PORT;

app.set('view engine','ejs');
app.set('views','views');
app.set('layout','./master')

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use('/public',express.static('public'));
app.use('/fontawesome',express.static('public'));
app.use('/home',require('./routers/home').home);
app.use('/sorting',require('./routers/sorting').sorting);
app.use(expressLayout);






app.listen(PORT,function()
{
    console.log('server running at //localhost:'+ PORT);
});