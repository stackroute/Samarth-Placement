(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('roleFact', ['$http', function($http)
			{
				function rolesReq() {

					let req ={};
					req.url = '/sidebar/roles';
					req.method = 'GET';
					return $http(req);
				}
				let factory = {
					rolesReq: rolesReq
				};
				return factory;
			}]);
}());

