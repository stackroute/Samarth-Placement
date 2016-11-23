angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login.candidateReg', {
        url:'/registercandidate',
        views: {
            'content@': {
                templateUrl: 'registercandidate/template/canditateRegistration.html',
                controller:'candidateRegistrationController'
                
            }
        }
 
    })
 });