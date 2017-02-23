(function() {
	'use strict';
	angular
		.module('samarth.cordsignup')
		.factory('submitFormFact', ['$http', function($http) {
			function submitForm(datas) {
				let req = {};
				req.url = '/coordinatorregister/createCoordinator';
				req.method = 'POST';
				req.data = datas;
				// console.log(datas);
				return $http(req);
			}
			let factory = {
				submitForm: submitForm

			};
			return factory;
		}]);
}());
