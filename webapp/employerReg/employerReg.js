angular
  .module("samarth")
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
    .state('index.empreg', {
      url:'/employerregistration',
      views: {
        'content@': {
          templateUrl: 'employerReg/template/employerregistration.html',
          resolve: {
            loginRequired: loginRequired
          }
        }
    }
    });
   }