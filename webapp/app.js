
angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.dashboard',
 'samarth.jobPost',
 'samarth.signUp'
 ])
    .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      
  });