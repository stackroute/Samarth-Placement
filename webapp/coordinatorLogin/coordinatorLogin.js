<<<<<<< HEAD
angular.module("samarth.coordinatorlogin", [])
	   .config(config);
function config($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');
     $stateProvider
    .state('index',{
=======
angular.module("samarth.coordinatorlogin", [
	'ngMaterial',
	'ui.router',
	'ngMessages'])
   .config(config);

   function config($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('/');
       $stateProvider
      .state('index',{
>>>>>>> 94ef6c2456ff108d05aeaac7228f64bbd293fa45
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
  