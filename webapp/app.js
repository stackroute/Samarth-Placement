angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'ngAnimate',
 'samarth.home',
 'samarth.coordinatorLogin',
 'samarth.dashboard',
 'samarth.candidatesearch',
 'samarth-webcomponents',
 'samarth.cordsignup',
 'samarth.import',
 'samarth.candidateReg',
 'samarth.centerdetails',
 'samarth.centerdetailsreg',

 'samarth.completeprofile',
 'ngFlash',
 'LocalStorageModule',
 'satellizer',
 'ngStorage',
 'simplePagination',
 'samarth.jobSearch',
 'samarth.jobProvider',
 'samarth.placementProcess'
  ])

  	.config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('default')
	      .primaryPalette('indigo')

	  })
.config(['$locationProvider', function($locationProvider) {
 $locationProvider.hashPrefix('');
}])
.run(function($http, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.tokenDetails) {
            $http.defaults.headers.common['x-access-token'] = $localStorage.tokenDetails.token;
        }
 });
