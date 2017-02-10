(function() {
	'use strict';
	angular
		.module('samarth.cordsignup')
		.factory('updateFormFact', ['$http', function($http) {
			function updateForm(datas) {
				let req = {};
				req.url = '/coordinatorregister/updatecoordinator/'+datas.coordinatorId;
				req.method = 'PATCH';
				req.data = datas;
				return $http(req);
			}
			let factory = {
				updateForm: updateForm
			};
			return factory;
		}]);
}());