var express=require('express');
var candidateRegController=require('./../controllers/candidateRegController');
var candidateRegRoutes=express.Router();
candidateRegRoutes.route('')
.get(candidataRegController.get)
.post(candidateRegController.add);
module.exports=candidateRegRoutes;