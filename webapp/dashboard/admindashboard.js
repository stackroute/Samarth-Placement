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
      'appbar@': {
        templateUrl: 'home/template/navbar.html',
        controller: 'navbarCtrl',
        controllerAs: 'vm'
      },
      'content@': {
        templateUrl: 'dashboard/template/dashboard.html',
        controller: 'admindashboardCtrl',
        controllerAs: 'vm',
        resolve: {

          loginRequired: loginRequired

        }
      }
    }
  });

}
