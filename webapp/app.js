
angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.dashboard',
 'samarth.jobPost',
 'samarth.jobSearch',
 'samarth.cordsignup'
  ])
    .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      
  });