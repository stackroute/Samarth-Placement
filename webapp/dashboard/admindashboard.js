angular
.module('samarth.admindashboard', [])
.config(config);

function config($stateProvider) {
  let loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
    let deferred = $q.defer();
    if ($auth.isAuthenticated()) {
       deferred.resolve();
    } else {
      $location.path('/home');
    }
    return deferred.promise;
  }];

  $stateProvider
  .state('index.admindashboard', {
    url: '/admindashboard',
    views: {
      
      'content@': {
        templateUrl: 'dashboard/template/admindashboard.html',
        controller: 'admindashboardCtrl',
        controllerAs: 'vm',
        resolve: {

          loginRequired: loginRequired

        }
      }
    }
  });

}
