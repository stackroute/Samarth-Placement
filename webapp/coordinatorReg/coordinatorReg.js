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
			let loginRequired = ['$q','$location', '$auth', function($q, $location, $auth) {
      let deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } 
      else {
        $location.path('/home');
      }
      return deferred.promise;
    }];
			$stateProvider
			.state("index.createaccount",{
				url:"/createaccount",
				views: {
					'content@': {
						templateUrl: 'coordinatorReg/template/coordinatorReg.html',
						controller:"coordinatorRegCtrl",
						controllerAs:"vm",
						resolve: {
            loginRequired: loginRequired
          }
					}
				}
			});
	      // .state("submitButton",{
	      //   url:"/submitButton",
	      //   template:"Registeration is done"
	      // })
	    }
})();