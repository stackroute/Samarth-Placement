(function(){
  'use:strict'
  angular
    .module('samarth')
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

