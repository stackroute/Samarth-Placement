angular
  .module("samarth.coordinatorLogin", [
  	'ngMaterial',
  	'ui.router',
  	'ngMessages','satellizer','ngStorage'])
  .config(config)
  .config(httpInterceptor);
  function httpInterceptor($httpProvider,$authProvider){
    $authProvider.loginUrl='/signin';
     /*$authProvider.signupUrl = '/signup';*/
    $authProvider.httpInterceptor=true;
  }


  function config($stateProvider/*,$urlRouterProvider*/){
     let skipIfLoggedIn = ['$q', '$auth', '$location', function($q, $auth, $location) {
                let deferred = $q.defer();
               if ($auth.isAuthenticated()) {
                console.log('from inside helper');
                  
                    $location.path('/home/dashboard');
                   
                    deferred.resolve();
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }];   
            /*$urlRouterProvider.otherwise('/home');*/ 
   $stateProvider
  .state('index.home',{
    url: '',
    views: {
          
      'content@': {
       templateUrl: 'coordinatorLogin/template/login.html',
       controller:'signinCtrl' ,
       controllerAs:'vm',
       resolve: {
                                skipIfLoggedIn: skipIfLoggedIn
                                    
                            }
     
     }
   }
  })

};

