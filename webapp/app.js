angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.dashboard',
 'samarth.jobPost'
 ]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      
  });