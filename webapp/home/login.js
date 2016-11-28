angular.module("samarth")
    .config(config);

    function config($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.signin',{
        url: '/samarthcoordinator',
        views: {
            'appbar@': {
                templateUrl: 'home/template/navbar.html',
                controller:'navbarCtrl'
            },
            'content@': {
                templateUrl: 'dashboard/template/dashboard.html',
                controller:'dashboardCtrl'

            }
   
        }
        
    });
 } 