angular
	.module('samarth.centerdetailsreg')
	.factory('centerdetailsregfactory', 
		function($http) {
		var service = {
			initialData :initialData
		};
		return service;      

		function initialData(centerData) {
			var req = {};
			req.url = '/center';
			req.method = 'POST';	
			req.data=centerData;
			return $http(req);
			console.log($http(req));
		};
	})