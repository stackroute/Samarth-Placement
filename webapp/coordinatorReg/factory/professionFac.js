(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('professionFac', ['$http', function($http)
			{
				function profReq() {
					let req = {};
					req.url = '/placement/profession';
					req.method = 'GET';
					return $http(req);
				}
				let factory = {
				profReq: profReq
				};
				return factory;
			}]);
}());
