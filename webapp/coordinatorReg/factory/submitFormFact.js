(function() {
    'use strict';
	    angular
		    .module('samarth.cordsignup')
		    .factory('submitFormFact',submitFormFact);

		    function submitFormFact($http) 
		    {
		    	var factory = {
					submitForm :submitForm
				};
			    return factory;

		    	function submitForm(data) {
		    		var req = {};
		    		req.url = '/createaccount/submit';
		    		req.method = 'GET';
		    		return $http(req,data);
		    	};
	   		}
})();

