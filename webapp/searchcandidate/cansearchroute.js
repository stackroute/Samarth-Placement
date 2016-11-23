angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login.candidatesearch', {
        url:'/searchcandidate',
        views: {
            'content@': {
                templateUrl: 'searchcandidate/template/searchcandidate.html',
                
            }
        }
 
    })
 });