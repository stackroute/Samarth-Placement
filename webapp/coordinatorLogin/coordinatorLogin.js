(function(){
  'use strict';
  angular
  .module('samarth.coordinatorLogin', [
    'ngMaterial',
    'ngMessages',
    'ngStorage',
    'satellizer',
    'ui.router'])
  .config(config)
  .config(httpInterceptor);
  function httpInterceptor($httpProvider, $authProvider) {
    $authProvider.loginUrl = '/signin';
    $authProvider.httpInterceptor = true;
  }

  function config($stateProvider) {
    let skipIfLoggedIn = ['$q', '$auth', '$location', function($q, $auth, $location) {
      let deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        $location.path('/home/dashboard');
        deferred.resolve();
      }
      else {
        deferred.resolve();
      }
      return deferred.promise;
    }];
    let loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      let deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        // console.log('Payload');
        // console.log($auth.getPayload());
        deferred.resolve();
      }
      else {
        $location.path('/home');
      }
      return deferred.promise;
    }];
    $stateProvider
    .state('index.home', {
    url: '/login',
    views: {
    'content@': {
      templateUrl: 'coordinatorLogin/template/login.html',
      controller: 'signinCtrl',
      controllerAs: 'vm',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    }
   }
  })
  .state('index.aboutus', {
    url: '/aboutus',
    views: {
      'content@': {
        templateUrl: 'home/template/aboutus.html',
        resolve: {
          loginRequired: loginRequired
        }
      }
    }
  });
}
})();
