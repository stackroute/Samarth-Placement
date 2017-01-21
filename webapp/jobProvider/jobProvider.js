(function() {
  'use strict';
  angular
    .module('samarth.jobProvider', [])
    .config(config);


    function config($stateProvider) {
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
      $stateProvider
      .state('index.emp', {
        url: '/jobProvider',
        views: {
          'content@': {
            templateUrl: 'jobProvider/template/jobProvider.html',
            controller: 'jobProviderCtrl',
            resolve: {
              loginRequired: loginRequired
            }
          }
        }
      })
    }
}());
