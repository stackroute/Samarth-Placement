angular.module("samarth")
    .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
    .state('index',{
        url: '/',
        views: {
            'appbar': {
                templateUrl: 'login/template/home.html',
                
                //controller:'navbarCtrl'
            },
            'content': {
                
            }
   
        }
        
    })
     $stateProvider
      .state('index.signin',{
        url: '/signin',
        views: {
            'content@': {
                templateUrl: 'login/template/login.html',
                //controller:'dashboardCtrl'
            }
   
        }
        
    })
  });