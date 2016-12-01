var Item=require('./../models/candidateRegModel');
var item=require('./../models/candidateRegModel');

var get=function(req,res){
	item.find(function(err,items){
		if(err){
			res.status(500);
			res.send("Internet server error");
		}
		else
		{
			res.status(200);
			res.send(items);
		}
	});
};
var add=function(req,res){
	var item=new Item(req.body);
	item.save(function(err){
		if(err){
			res.status(500);
			res.send("Failed");
		}
		else
		{
			res.status(201);
			res.send(item);
		}
	})
};

module.exports={
	get:get,
	add:add
};