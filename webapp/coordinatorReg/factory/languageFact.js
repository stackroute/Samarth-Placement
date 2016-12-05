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
					req.url = './coordinatorReg/json/language.json';
					req.method = 'GET';
					return $http(req);
				};
			}
})();