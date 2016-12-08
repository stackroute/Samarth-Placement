<<<<<<< HEAD
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
=======
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
>>>>>>> e3c7837603dbdfe9b0dd51bc471a457b82a96615
