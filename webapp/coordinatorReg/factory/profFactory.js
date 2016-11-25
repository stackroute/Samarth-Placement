(function() {
    'use strict';
    angular
	    .module('samarth.signUp')
	    .factory('profFactory',profFactory);

	    function profFactory($http) {
	    	var factory = {};
	    	factory.profReq = function() {
	    		var req = {};
	    		req.url = './webapp/json/prof.json';
	    		req.method = 'GET';
	    		return $http(req);
	    	};
	    	return factory;
	    }
})();
