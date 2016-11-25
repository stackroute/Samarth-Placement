
angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.postjob', {
        url:'/jobpost',
        views: {
            'content@': {
                templateUrl: 'jobPost/template/postjob.html',
                
            }
        }
 
    })
 });
