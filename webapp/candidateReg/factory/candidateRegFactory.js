angular
	.module('samarth.candidateReg')
	.factory('candidateRegFactory', candidateRegFactory)
	.factory('professionservice',professionservice)
	.factory('languageFact',languageFact)
	.factory('locationFact',locationFact)
	

	function candidateRegFactory($http) {
		var service = {
			initialData :initialData
		};
		return service;        function initialData() {
			var req = {};
			req.url = 'candidateReg/factory/profession.json';
			req.method = 'GET';
			return $http(req);
		};
	}
	function professionservice($http) {
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
	}
	function languageFact($http) 
	{
		var factory = {
			languageReq :languageReq
		};
		return factory;

		function languageReq() {
			var req = {};
			req.url = '/coordinatorreg/language';
			req.method = 'GET';
			return $http(req);
		};
	}
	function locationFact($http) 
	{
		var factory = {
			locationReq :locationReq
		};
		return factory;

		function locationReq() {
			var req = {};
			req.url = '/coordinatorreg/location';
			req.method = 'GET';
			return $http(req);
		};
	}