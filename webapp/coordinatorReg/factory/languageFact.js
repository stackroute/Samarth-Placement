<<<<<<< HEAD
(function() {
	'use strict';
		angular
			.module('samarth.cordsignup')
			.factory('languageFact',languageFact);

			function languageFact($http) 
			{
				var factory = {
					languageReq :languageReq
				};
				return factory;

				function languageReq() {
					var req = {};
					req.url = '/coordinatorreg/language';
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
			.factory('languageFact', languageFact);

			function languageFact($http) 
			{
				let factory = {
					languageReq :languageReq
				};
				return factory;

				function languageReq() {
					let req = {};
					req.url = '/coordinatorreg/language';
					req.method = 'GET';
					return $http(req);
				}
			}
}());
>>>>>>> e3c7837603dbdfe9b0dd51bc471a457b82a96615
