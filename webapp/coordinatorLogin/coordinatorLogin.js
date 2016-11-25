angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('index',{
        url: '/',
        views: {
            'appbar': {
               
            },
            'content': {
                templateUrl: 'coordinatorLogin/template/home.html'
            }
   
        }
        
    })
     
     
  });