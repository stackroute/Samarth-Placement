(function() {
	'use strict';
	angular
		.module('samarth.cordsignup')
		.factory('submitFormFact', ['$http', function($http)
		{
			function submitForm(datas) {
				let req = {};
				req.url = '/coordinatorregister/createcoordinator';
				req.method = 'POST';
				req.data = datas;
				return $http(req);
			}
			let factory = {
				submitForm: submitForm
			};
			return factory;
		}]);
}());
