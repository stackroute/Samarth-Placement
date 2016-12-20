var obj = require("./navItems.json");
var router = require('express').Router();
var fs = require("fs");

router.get("/sidenavbar", function(req, res) {
	res.status(200).json(obj);
});
module.exports = router;
