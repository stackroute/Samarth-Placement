(function() {
	'use strict';
		angular
		.module('samarth.import',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])
		.config(coorImportConfig);

		function coorImportConfig($stateProvider){
			$stateProvider
			.state("index.importCoordinators",{
				url:"/importCoordinators",
				views: {
					'content@': {
						templateUrl: 'importCoordinators/template/import.html',
						controller:"coordinatorImportCtrl",
						controllerAs:"vm"
					
					}
				}
			});
	    }
})();