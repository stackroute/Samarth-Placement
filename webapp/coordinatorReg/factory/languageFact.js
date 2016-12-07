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