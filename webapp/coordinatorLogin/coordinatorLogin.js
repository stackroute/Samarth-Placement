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
             let loginRequired = ['$q','$location', '$auth', function($q, $location, $auth) {
      let deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } 
      else {
        $location.path('/home');
      }
      return deferred.promise;
    }]; 
            /*$urlRouterProvider.otherwise('/home');*/ 
   $stateProvider
  .state('index.home',{
    url: '/login',
    views: {
       /*'appbar@': {
                templateUrl: 'home/template/navbar.html',
                controller:'navbarCtrl',
                controllerAs : 'vm',
                
      },*/
          
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
  .state('index.aboutus',{
    url:'/aboutus',
    views:{
      'content@':{
        templateUrl: 'home/template/aboutus.html',
        resolve: {
            loginRequired: loginRequired
          }
      }
    }
  });

};

