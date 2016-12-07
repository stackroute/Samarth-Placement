(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('roleFact', roleFact);

			function roleFact($http) 
			{
				let factory = {
					roleReq :roleReq
				};
				return factory;

				function roleReq() {
					let req = {};
					req.url = '/coordinatorreg/role';
					req.method = 'GET';
					return $http(req);
				}
			}
}());