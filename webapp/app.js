  angular.module('samarth', 
	['ngMaterial','ui.router',
	'ngMessages','samarth.dashboard'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      
  });