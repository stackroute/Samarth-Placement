angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.searchjob', {
        url:'/jobsearch',
        views: {
            'content@': {
                templateUrl: 'jobSearch/template/searchjob.html',
                
            }
        }
 
    })
 });