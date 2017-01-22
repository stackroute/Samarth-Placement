angular
.module('samarth.dashboard', [])
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
  .state('index.dashboard', {
    url: '/dashboard',
    views: {
      'appbar@': {
        templateUrl: 'home/template/navbar.html',
        controller: 'navbarCtrl',
        controllerAs: 'vm'
      },
      'content@': {
        templateUrl: 'dashboard/template/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'vm',
        resolve: {

          loginRequired: loginRequired

        }
      }
    }
  });

}
