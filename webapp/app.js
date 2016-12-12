angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'ngAnimate',
 'samarth.home',
 'samarth.coordinatorLogin',
 'samarth.dashboard',
 'samarth-webcomponents',
 'samarth.cordsignup',
 'samarth.candidateReg',
 'ngFlash',
 'LocalStorageModule',
 'satellizer',
 'ngStorage'
 
  ])

	
  	.config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('default')
	      .primaryPalette('blue')
	      
	  });