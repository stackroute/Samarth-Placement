let obj = require('./navItems.json');
let router = require('express').Router();
// let fs = require('fs');

router.get('/sidenavbar', function(req, res) {
	res.status(200).json(obj);
});
module.exports = router;
