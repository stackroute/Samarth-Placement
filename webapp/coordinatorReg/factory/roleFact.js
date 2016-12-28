(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('roleFact', ['$http', function($http)
			{
				function roleReq() {
					let req = {};
					req.url = '/coordinatorreg/role';
					req.method = 'GET';
					return $http(req);
				}
				let factory = {
					roleReq: roleReq
				};
				return factory;
			}]);
}());
