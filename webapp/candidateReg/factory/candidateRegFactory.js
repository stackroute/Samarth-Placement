angular
	.module('samarth.candidateReg')
	.factory('candidateRegFactory', candidateRegFactory);
	
	function candidateRegFactory($http) {
		var service = {
			initialData :initialData
		};
		return service;

		function initialData() {
		  var req = {};
		  req.url = 'candidateReg/factory/profession.json';
		  req.method = 'GET';
		  return $http(req);
	 	};
	 	
	 }