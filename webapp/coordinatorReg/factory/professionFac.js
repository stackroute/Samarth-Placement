<<<<<<< HEAD
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
	    		req.url = '/coordinatorreg/profession';
	    		req.method = 'GET';
	    		return $http(req);
	    	};
   		}
})();
=======
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
>>>>>>> e3c7837603dbdfe9b0dd51bc471a457b82a96615
