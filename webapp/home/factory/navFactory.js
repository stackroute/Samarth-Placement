(function(){
  'use strict'
  angular
    .module('samarth.home')
	.factory('navFactory', navFactory);
	function navFactory($http) {
		var factory = {getSidenav:getSidenav};
		return factory;
		function getSidenav() {
			var req = {};
			req.url = '/sidenavbar';
			req.method = 'GET';
			return $http(req);
		};
	}
})();

