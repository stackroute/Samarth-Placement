  angular
    .module('samarth.home')
	.factory('navFactory', ['$http', function($http) {
		let req = {};
			req.url = '/sidenavbar';
			req.method = 'GET';
			return $http(req);
	}]);
