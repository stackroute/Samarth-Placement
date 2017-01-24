angular
	.module('samarth.candidateReg')
	.factory('candidateRegFactory', 
		function($http) {
		var service = {
			initialData :initialData
		};
		return service;      

		function initialData(candidateData) {
			var req = {};
			req.url = '/register';
			req.method = 'POST';	
			req.data=candidateData;
			return $http(req);
		};
	})
	.factory('professionservice',
		function($http) {
		var professionData = {
			getProfession:getProfession
		};
		return professionData;        
		function getProfession() {
			var req = {};
			req.url = '/candidate/profession';
			req.method = 'GET';
			return $http(req)
		};
	})
	.factory('languageFact',
		function($http) 
	{
		var factory = {
			languageReq :languageReq
		};
		return factory;

		function languageReq() {
			var req = {};
			req.url = '/placement/language';
			req.method = 'GET';
			return $http(req);
		};
	})
	.factory('locationFact',
		function locationFact($http) 
	{
		var factory = {
			locationReq :locationReq
		};
		return factory;

		function locationReq() {
			var req = {};
			req.url = '/placement/location';
			req.method = 'GET';
			return $http(req);
		};
	})

	

	
	
	
	