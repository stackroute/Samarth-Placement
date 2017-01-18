(function() {
	'use strict';
		angular
		.module('samarth.cordsignup',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])
		.config(coorRegConfig);

		function coorRegConfig($stateProvider){
			$stateProvider
			.state("index.createaccount",{
				url:"/createaccount",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/getcoordinator.html',
						controller:"coordinatorRegCtrl",
						controllerAs:"vm"
					
					}
				}
			})
			.state("index.coordinatorregistration",{
				url:"/coordinatorregistration",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/coordinatorregistration.html',
						controller:"coordinatorRegCtrl",
						controllerAs:"vm"
					
					}
				}
			})
			.state("index.coordinatorupdation",{
				url:"/coordinatorupdation",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/coordinatorupdation.html',
						controller:"coordinatorRegCtrl",
						controllerAs:"vm"
					
					}
				}
			})
			// .state("index.deletecoordinator",{
			// 	url:"/deletecoordinator",
			// 	views: {
			// 		'content@': {
			// 			 templateUrl: 'coordinatorReg/template/getcoordinator.html',
			// 			controller:"coordinatorRegCtrl",
			// 			controllerAs:"vm"
					
			// 		}
			// 	}
			// })
			.state("index.getcoordinator",{
				url:"/getcoordinator",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/getcoordinator.html',
						controller:"coordinatorRegCtrl",
						controllerAs:"vm"
					
					}
				}
			});
	    }
})();