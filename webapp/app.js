angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'ngAnimate',
 'samarth.home',
 'samarth.coordinatorLogin',
 'samarth.dashboard',
 'samarth.centerdetails',
 'samarth.centerdetailsreg',
 'samarth.candidatesearch',
 'samarth-webcomponents',
 'samarth.cordsignup',
 'samarth.candidateReg',
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
}]);
