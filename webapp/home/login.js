angular.module('samarth.home',[])
    .config(config);

    function config($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/home');
      $stateProvider
  
     .state('index',{
        url:'/home',
        views: {
           
                'appbar': {
                templateUrl: 'home/template/navbar.html',
                controller:'navbarCtrl',
                controllerAs : 'vm',
                
      },
      
      'content': {
          controller:'rootCtrl'
      
     }
   
        }
    
    });
 
 }
 


   
 
