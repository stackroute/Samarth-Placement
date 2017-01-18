let obj = require('./centertype.json');
let router = require('express').Router();
// let fs = require('fs');

router.get('/centertypedrop', function(req, res) {
	res.status(200).json(obj);
});
module.exports = router;
