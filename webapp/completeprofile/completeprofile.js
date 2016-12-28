angular
.module('samarth.completeprofile',[])
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
  .state('index.verifyprofile', {
    url: '/verifyprofile/:candidateid',
    views: {
      "content@": {
        templateUrl: 'completeprofile/templates/completeprofile.html',
        controller: 'completeprofileCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      }
    }
  })
  .state('back', {
    url: '/viewprofile',
    views: {
      "content@": {
        templateUrl: '../candidatesearch/templates/candidatesearchhome.html',
        controller: 'candidatesearchctrl',
        resolve: {
          loginRequired: loginRequired
        }
      },
    }
  });

}
