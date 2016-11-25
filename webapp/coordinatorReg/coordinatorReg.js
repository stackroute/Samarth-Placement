angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
     $stateProvider
      .state('index.createaccount',{
        url: '/createaccount',
        views: {
            'content@': {
                templateUrl: 'coordinatorReg/template/coorRegister.html',
                //controller:'dashboardCtrl'
            }
   
        }
        
    })
  });