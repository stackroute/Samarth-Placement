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
				url:"createaccount",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/coordinatorReg.html',
						controller:"coorRegCtrl",
						controllerAs:"vm"
					}
				}
			});
	      // .state("submitButton",{
	      //   url:"/submitButton",
	      //   template:"Registeration is done"
	      // })
	    }
})();