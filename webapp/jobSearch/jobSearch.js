angular
  .module('samarth.jobSearch', [])
  .config(config);
  function config($stateProvider) {
    let loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
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
    .state('index.jobSearch', {
      url:'/jobsearch',
      views: {
        'content@': {
          templateUrl: './jobSearch/template/jobSearch.html',
          controller: 'jobSearchCtrl',
          resolve: {
            loginRequired: loginRequired
          }
        }
      }
    })
    .state('index.jobSearch.results', {
      url: '/jobslist/:searchText?',
      views: {
        'results': {
         templateUrl: './jobSearch/template/jobSearchResult.html',
         controller: 'jobSearchCtrl',
         resolve: {
           loginRequired: loginRequired
         }
       }
     }
   });
  }
