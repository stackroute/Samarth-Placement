angular
  .module('samarth.accessdenied',[])
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
    .state('index.accessdenied', {
      url:'/accessdenied',
      views: {
        'content@': {
          templateUrl: 'unauth/template/accessdenied.html'
          }
        }
  });
}
