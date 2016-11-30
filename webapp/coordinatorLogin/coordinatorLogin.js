<<<<<<< HEAD
angular.module("samarth.coordinatorlogin", [])
	   .config(config);
function config($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');
     $stateProvider
    .state('index',{
=======
angular.module("samarth.coordinatorLogin", [
	'ngMaterial',
	'ui.router',
	'ngMessages'])
   .config(config);

   function config($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('/');
       $stateProvider
      .state('index',{
>>>>>>> 1d4fd58009bbe56154c157f272692f5528ffbbfc
        url: '/',
        views: {
            'appbar': {
             },
            'content': {
             templateUrl: 'coordinatorLogin/template/login.html',
             controller:'signinCtrl' ,
               controllerAs:'vm'
            }
        }
        })
    }
  