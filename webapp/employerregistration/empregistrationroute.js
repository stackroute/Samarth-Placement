angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login.empreg', {
        url:'/employerregistration',
        views: {
            'content@': {
                templateUrl: 'employerregistration/template/employerregistration.html',
                
            }
        }
 
    })
 });