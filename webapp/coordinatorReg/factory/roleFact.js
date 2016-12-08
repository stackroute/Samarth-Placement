(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('roleFact',roleFact);

			function roleFact($http) 
			{
				var factory = {
					roleReq :roleReq
				};
				return factory;

				function roleReq() {
					var req = {};
					req.url = '/coordinatorreg/role';
					req.method = 'GET';
					return $http(req);
				};
			}
})();