angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.empreg', {
        url:'/employerregistration',
        views: {
            'content@': {
                templateUrl: 'employerReg/template/employerregistration.html',
                
            }
        }
 
    })
 });