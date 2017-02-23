(function() {
	'use strict';
		angular
		.module('samarth.config',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])
		.config(configuration);

		function configuration($stateProvider){
			$stateProvider
			.state("index.config",{
				url:"/config",
				views: {
					'content@': {
						templateUrl: 'config/template/config.html',
						controller:"configCtrl",
						controllerAs:"vm"
					
					}
				}
			});
	    }
})();