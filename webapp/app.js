angular.module('samarth',
 ['ngMaterial',
 'ngMdIcons',
 'ui.router',
 'ngMessages',
 'samarth.home',
 'samarth.coordinatorlogin',
 'samarth.dashboard',
 'samarth.jobPost',
 'samarth.jobSearch',
 'samarth.cordsignup',
 'samarth.candidateReg',
 'samarth.jobSearch'
  ])

    .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      
  });