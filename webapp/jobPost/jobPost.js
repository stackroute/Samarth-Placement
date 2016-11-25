
angular
    .module("samarth.jobPost",[])
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.jobPost', {
        url:'/jobPost',
        views: {
            'content@': {
                templateUrl: 'jobPost/template/jobPost.html',
                
            }
        }
 
    })
 });
