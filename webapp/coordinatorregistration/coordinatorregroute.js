angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
     $stateProvider
      .state('index.createaccount',{
        url: '/createaccount',
        views: {
            'content@': {
                templateUrl: 'coordinatorregistration/template/coordinatorregistration.html',
                //controller:'dashboardCtrl'
            }
   
        }
        
    })
  });