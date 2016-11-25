angular.module('samarth.dashboard',[ ])
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin.dashboard', {
        url:'/dashboard',
        views: {
            'content@': {
                templateUrl: 'dashboard/template/dashboard.html',
                controller:'dashboardCtrl'
                
            }
        }
 
    })
 });