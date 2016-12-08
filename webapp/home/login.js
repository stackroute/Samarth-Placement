    function config($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('index.home', 
     {
        url: 'samarthcoordinator',
        views: {
            'content@': 
            {
                templateUrl: 'dashboard/template/dashboard.html',
                controller:'dashboardCtrl',
                controllerAs : 'vm'

            }
   
        }
    
    });
 } 
 angular.module('samarth.home',[])
    .config(config);