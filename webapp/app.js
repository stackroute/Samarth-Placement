angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.home',
 'samarth.coordinatorLogin',
 'samarth.dashboard',
 'samarth-webcomponents',
 'samarth.cordsignup',
 'samarth.candidateReg',
 'simplePagination',
 'samarth.candidatesearch'
  ])
  	.config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('default')
	      .primaryPalette('blue')
	      
	  });