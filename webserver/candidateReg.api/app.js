var express=require('express');
var candidateRegRoutes=require('./routes/candidateRegRoutes');
var mongoose=require('mongoose');
var bodyParser=require('body-Parser');
var db=mongoose.connect('mongodb://localhost/candidateReg');
var app=express();
app.use(bodyParser.json());
app.listen(8080,function(){
	console.log("Server running");
});
app.use('/item',candidateRegRoutes);
