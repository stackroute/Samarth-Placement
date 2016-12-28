var obj = require("./resource.json");
var router = require('express').Router();
var fs = require("fs");

router.get("/navlanguage", function(req, res) {
	res.status(200).json(obj.navlanguage);
		
});

//navbar data showing in English
router.get("/navEnglish", function(req, res) {
	
	res.status(200).json(obj.navEnglish);	

});
//navbar data showing in hindi

router.get("/navHindi", function(req, res) {

	res.status(200).json(obj.navHindi);	

});

//navbar data showing in Telugu
router.get("/navTelugu", function(req, res) {
	
	res.status(200).json(obj.navTelugu);	

});
//navbar data showing in Punjabi
router.get("/navPunjabi", function(req, res) {
	
	res.status(200).json(obj.navPunjabi);	

});
//navbar data showing in Bengali
router.get("/navBengali", function(req, res) {

	res.status(200).json(obj.navBengali);	

});
router.get("/navTamil", function(req, res) {

	res.status(200).json(obj.navTamil);	

});
router.get("/navMarathi", function(req, res) {

	res.status(200).json(obj.navMarathi);	

});
//section data showing in English
router.get("/sectionEnglish", function(req, res) {
	
	res.status(200).json(obj.sectionEnglish);	

});
//section data showing in Hindi

router.get("/sectionHindi", function(req, res) {
	
	res.status(200).json(obj.sectionHindi);	

});
//section data showing in Telugu
router.get("/sectionTelugu", function(req, res) {
	
	res.status(200).json(obj.sectionTelugu);	

});
//section data showing in Punjabi
router.get("/sectionPunjabi", function(req, res) {
	
	res.status(200).json(obj.sectionPunjabi);	

});
//section data showing in Bengali
router.get("/sectionBengali", function(req, res) {
	
	res.status(200).json(obj.sectionBengali);	

});
//section data showing in Tamil
router.get("/sectionTamil", function(req, res) {
	
	res.status(200).json(obj.sectionTamil);	

});
router.get("/sectionMarathi", function(req, res) {
	
	res.status(200).json(obj.sectionMarathi);	

});

module.exports = router;