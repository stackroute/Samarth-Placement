var schema= require('./schema');
var router = require('express').Router();
router.get('/', function(req, res){
	schema.find(function(err,data){
        if(err){
            res.send(err);
        }
        else{
         res.json(data);
        }
    })

})

router.post('/send', function(req, res){

	console.log("body: ", req.body);
    var send_data=new schema();
    send_data.Profession_name=req.body.Profession_name;


 send_data.save(function (err) {
 if (err){
     res.send(err);
 }
 else{
     var data={
        msg:"your records save successfully"
     }
     res.json(data);

 }
})

})
module.exports = router
