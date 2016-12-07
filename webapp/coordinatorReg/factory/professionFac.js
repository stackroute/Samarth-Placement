(function() {
	'use strict';
    angular
	    .module('samarth.cordsignup')
	    .factory('professionFac', professionFac);

	    function professionFac($http) 
	    {
	    	let factory = {
				profReq :profReq
				};
		    return factory;
	    	function profReq() {
	    		let req = {};
	    		req.url = '/coordinatorreg/profession';
	    		req.method = 'GET';
	    		return $http(req);
	    	}
   		}
}());
