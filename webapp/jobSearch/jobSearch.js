angular
     .module("samarth.jobSearch",[])
     
     .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.jobSearch', {
        url:'/jobsearch',
        views: {
            'content@': {
                templateUrl: 'jobSearch/template/jobSearchIndex.html',
                controller:'jobSearchCtrl'
            }
        }
 
    })
 });