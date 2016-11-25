angular.module('samarth')
	.factory('navFactory', function($http) {
		var factory = {};
		factory.getResult = function() {
		  var req = {};
		  req.url = 'home/factory/navItems.json';
		  req.method = 'GET';
		  return $http(req);
	 	};
	 	return factory;
	});
