angular
  .module('samarth.candidateReg',[])
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
    .state('index.candidateReg', {
      url:'/candidateregistration',
      views: {
        'content@': {
          templateUrl: 'candidateReg/template/candidateRegistration.html',
          controller:'candidateRegCtrl',
          controllerAs : 'vm',
          resolve: {
            loginRequired: loginRequired
          }
        }
      }
  });
}