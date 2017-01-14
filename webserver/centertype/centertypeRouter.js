let obj = require('./centertype.json');
let router = require('express').Router();
//let fs = require('fs');

router.get('/', function(req, res) {
	res.status(200).json(obj.centertypeitems);
});

module.exports = router;
