angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.home.empreg', {
        url:'/employerregistration',
        views: {
            'content@': {
                templateUrl: 'employerReg/template/employerregistration.html',
                
            }
        }
 
    })
 });