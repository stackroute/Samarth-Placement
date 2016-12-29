angular.module('samarth.home',[])
.config(config);

function config($stateProvider,$urlRouterProvider){
  $urlRouterProvider.when('/','/home/login');
  $urlRouterProvider.when('/home','/home/login');
  $urlRouterProvider.otherwise('/home/login');
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
      }

    }

  });

}
