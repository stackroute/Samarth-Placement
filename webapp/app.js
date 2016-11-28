
angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.dashboard',
 'samarth.jobPost',
 'samarth.signUp',
 'samarth.candidateReg',
 'samarth.jobSearch'
  ])

    .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      
  });