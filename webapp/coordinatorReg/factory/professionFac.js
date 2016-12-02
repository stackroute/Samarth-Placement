(function() {
	'use strict';
    angular
	    .module('samarth.cordsignup')
	    .factory('professionFac',professionFac);

	    function professionFac($http) 
	    {
	    	var factory = {
				profReq :profReq
				};
		    return factory;
	    	function profReq() {
	    		var req = {};
	    		req.url = '/candidate/profession';
	    		req.method = 'GET';
	    		return $http(req);
	    	};
   		}
})();
