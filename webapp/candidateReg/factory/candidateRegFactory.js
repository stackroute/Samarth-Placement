angular
	.module('samarth.candidateReg')
	.factory('candidateRegFactory', candidateRegFactory)
	.factory('professionservice',professionservice)

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