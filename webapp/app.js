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
 'samarth.candidateReg',
 'ngFlash',
 'LocalStorageModule',
 'satellizer',
 'ngStorage',
 'simplePagination',
 'samarth.jobSearch'
  ])

	
  	.config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('default')
	      .primaryPalette('blue')
	      
	  });