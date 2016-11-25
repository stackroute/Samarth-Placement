angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.candidateReg', {
        url:'/candidateregistration',
        views: {
            'content@': {
                templateUrl: 'candidateReg/template/candidateRegistration.html',
                factory:'httpServerFactory',
                controller:'candidateRegistrationController'
                
            }
        }
 
    })
 });