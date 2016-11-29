(function(){
  'use:strict'
  angular
    .module('samarth.dashboard')
	.factory('dashboardFactory', dashboardFactory);
	  function dashboardFactory($http) {
		  var factory = {};
		  factory.getResult = function() {
		  var req = {};
		  req.url = 'dashboard/factory/data.js';
		  req.method = 'GET';
		  return $http(req);
	 	  };
	 	  return factory;
	}
})();
