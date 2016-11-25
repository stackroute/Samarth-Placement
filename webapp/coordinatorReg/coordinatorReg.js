(function() {
	'use strict';
		angular
		.module('samarth.signUp',[
			'ngMaterial',
			'ui.router',
			'ngMessages'
			])
		.config(coorPageRoute);

		function coorPageRoute($stateProvider){
			$stateProvider
			.state("index.createaccount",{
				url:"/createaccount",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/coorRegister.html',
						controller:"coorCtrl",
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

