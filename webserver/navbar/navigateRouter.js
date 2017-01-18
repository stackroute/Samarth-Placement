let roles = require('./roles.json');
let router = require('express').Router();
let sidenavmenus = require('../navbar/navItems.json');
let data = {};
// let authorization = require('../auth/authorization');
// let fs = require('fs');

router.get('/roles',function(req, res) {
	// console.log("sidenavbar");
	res.status(200).json(roles);
});
router.get('/sidenavmenu',function(req, res) {
		sidenavmenus.roles.forEach(function(obj){
    if(obj.role == req.decoded.role[0]){
      data =  obj;
    }
  })
	res.status(200).json(data);
});
module.exports = router;
