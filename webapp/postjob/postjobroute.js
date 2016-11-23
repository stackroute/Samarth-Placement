
angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login.postjob', {
        url:'/postjob',
        views: {
            'content@': {
                templateUrl: 'postjob/template/postjob.html',
                
            }
        }
 
    })
 });
