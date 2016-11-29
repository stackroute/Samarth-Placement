angular.module("samarth.coordinatorlogin", [
	'ngMaterial',
	'ui.router',
	'ngMessages'])
   .config(config);

   function config($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('/');
       $stateProvider
      .state('index',{
        url: '/',
        views: {
            'appbar': {
             },
            'content': {
             templateUrl: 'coordinatorLogin/template/login.html',
             controller:'signinCtrl' ,
               controlleras:'vm'
            }
        }
        })
    }
  