(function() {
	'use strict';
		angular
		.module('samarth.import',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])
		.config(importConfig);

		function importConfig($stateProvider){
			$stateProvider
			.state("index.import",{
				url:"/import",
				views: {
					'content@': {
						templateUrl: 'import/template/import.html',
						controller:"importCtrl",
						controllerAs:"vm"
					
					}
				}
			});
	    }
})();