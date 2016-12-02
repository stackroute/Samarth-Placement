var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var candidateRegModel=new Schema({
	name:String,
	mobileno:String,
	email:String,
	dateOfBirth:Date,
	gender:String,
	profession:String,
	Location:String,
	Language:String

});
module.exports=mongoose.model("Item",candidateRegModel);