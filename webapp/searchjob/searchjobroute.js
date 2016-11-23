angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login.searchjob', {
        url:'/searchjob',
        views: {
            'content@': {
                templateUrl: 'searchjob/template/searchjob.html',
                
            }
        }
 
    })
 });