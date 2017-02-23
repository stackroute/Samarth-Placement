(function() {
	'use strict';
		angular
			.module('samarth.config')
			.factory('professionFactory', ['$http', function($http)
			{
				function profReq() {
					let req = {};
					req.url = '/placement/profession';
					req.method = 'GET';
					return $http(req);
				}

				function addProf(profName){
					let req = {};
					req.url = '/configuration/profession';
					req.method = 'POST';
					req.data = profName;
					return $http(req);
				}

				function updateProf(data){
					// console.log(data);
					let req = {};
					req.url = '/configuration/editprofession';
					req.method = 'PATCH';
					req.data = data;
					return $http(req);
				}

				function deleteProf(profName){
					// console.log(profName.profName);
					let req = {};
					req.url = '/configuration/delprofession/'+profName;
					req.method = 'DELETE';
					// req.data = profName;
					return $http(req);
				}

				let factory = {
				profReq: profReq,
				addProf: addProf,
				updateProf: updateProf,
				deleteProf: deleteProf
				};
				return factory;
			}]);
}());
