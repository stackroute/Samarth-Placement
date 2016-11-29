(function(){
<<<<<<< HEAD
  'use strict'
  angular
    .module('samarth.home')
=======
	'use:strict'
	angular
	.module('samarth.home')
>>>>>>> d0bfe8fe804ef3d6633ce7ba3bfa418f162fe334
	.factory('navFactory', navFactory);

	function navFactory($http) {
		var factory = {getSidenav:getSidenav};
		return factory;
		function getSidenav() {
			var req = {};
			req.url = 'home/factory/navItems.json';
			req.method = 'GET';
			return $http(req);
		};
	}
})();

