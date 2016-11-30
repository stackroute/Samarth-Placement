angular.module('samarth.home',[])
    .config(config);

    function config($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.home',{
        url: 'samarthcoordinator',
        views: {
            'appbar@': {
                templateUrl: 'home/template/navbar.html',
                controller:'navbarCtrl',
                controllerAs : 'vm'
            },
            'content@': {
                templateUrl: 'dashboard/template/dashboard.html',
                controller:'dashboardCtrl',
                controllerAs : 'vm'

            }
   
        }
    
    });
 } 