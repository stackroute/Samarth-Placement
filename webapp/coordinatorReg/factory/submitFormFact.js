(function() {
	'use strict';
	angular
		.module('samarth.cordsignup')
		.factory('submitFormFact', submitFormFact);

		function submitFormFact($http) 
		{
			let factory = {
				submitForm :submitForm
			};
			return factory;

			function submitForm(datas) {
				let req = {};
				req.url = '/coordinatorregister/createcoordinator';
				req.method = 'POST';
				req.data=datas;
				return $http(req);
			}
		}
}());