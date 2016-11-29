
angular
	.module('samarth',
		 ['ngMaterial',
		 'ngMdIcons',
		 'ui.router',
		 'ngMessages',
		 'samarth.home',
		 'samarth.dashboard',
		 'samarth.jobPost',
		 'samarth.jobSearch',
		 'samarth.cordsignup',
		 'samarth.candidateReg',
		 'samarth.coordinatorlogin'
		  ])

	.config(function($mdThemingProvider) {
	    $mdThemingProvider.theme('default')
	      .primaryPalette('blue')
	      
	  });