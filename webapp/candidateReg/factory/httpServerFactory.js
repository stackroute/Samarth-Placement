angular.module('samarth')
	.factory('httpServerFactory', function($http) {
		var factory = {};
		factory.getResult = function() {
		  var req = {};
		  req.url = 'candidateregistration/factory/profession.json';
		  req.method = 'GET';
		  return $http(req);
	 	};
	 	return factory;
	});