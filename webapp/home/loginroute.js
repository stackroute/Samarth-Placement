angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.login',{
        url: '/samarthcoordinator.dashboard',
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
        
    })
 });