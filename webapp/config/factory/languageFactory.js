(function() {
	'use strict';
		angular
			.module('samarth.config')
			.factory('languageFactory', ['$http', function($http)
			{
				function languageReq() {
					let req = {};
					req.url = '/placement/language';
					req.method = 'GET';
					return $http(req);
				}

				function addLang(langName){
					let req = {};
					req.url = '/configuration/language';
					req.method = 'POST';
					req.data = langName;
					return $http(req);
				}

				function updateLang(data){
					// console.log(data);
					let req = {};
					req.url = '/configuration/editlanguage';
					req.method = 'PATCH';
					req.data = data;
					return $http(req);
				}

				function deleteLang(langName){
					// console.log(profName.profName);
					let req = {};
					req.url = '/configuration/dellanguage/' + langName;
					req.method = 'DELETE';
					// req.data = profName;
					return $http(req);
				}

				let factory = {
					languageReq: languageReq,
					addLang: addLang,
					updateLang: updateLang,
					deleteLang: deleteLang
				};
				return factory;
			}]);
}());
