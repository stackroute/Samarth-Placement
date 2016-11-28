(function(){
  'use:strict';
angular
    .module("samarth.jobPost",[])
    .config(config);
    function config($stateProvider, $urlRouterProvider){
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
 }
 })();   
