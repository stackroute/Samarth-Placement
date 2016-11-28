(function(){
  'use:strict'
  angular
    .module('samarth')
	.factory('navFactory', navFactory);
	function navFactory($http) {
		  var factory = {};
		  factory.getResult = function() {
		  var req = {};
		  req.url = 'home/factory/navItems.json';
		  req.method = 'GET';
		  return $http(req);
	 	  };
	 	  return factory;
	}
})();

