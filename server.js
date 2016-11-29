var express= require('express');
var mongoose= require('mongoose');
var dashboard = require('./child.js')
mongoose.connect('mongodb://localhost/dashboard');
var bodyParser= require('body-parser')
var app= express();
var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
{
	console.log("you have connected successfully");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/dashboard', dashboard)
app.listen(8080);
