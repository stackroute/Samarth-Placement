angular
  .module('samarth.candidatesearch',[])
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
      .state('index.candidatesearch', {
        url: 'candidatessearch/:circleDomain?circleName',
        params:{
          circleName:null,
          circleDomain:null
        },
        views: {
          "content@": {
            templateUrl: 'candidatesearch/templates/candidatesearchhome.html',
            controller: 'candidatesearchctrl',
            resolve: {
              loginRequired: loginRequired
            }
          }
        },
      resolve:{
        circleDomain:['$stateParams',function($stateParams){
          return $stateParams.circleDomain;
        }],
        circleName:['$stateParams',function($stateParams){
          return $stateParams.circleName;
        }]
      }
    })
    .state('index.candidatesearch.results', {
      url: 'searchlist',
      params:{
        jobname:null
      },
      views: {
        'results': {
          templateUrl: 'candidatesearch/templates/candidatesearchresults.html',
            // controller: 'candidatesearchctrl'
            resolve: {
              loginRequired: loginRequired
            }
          }
        }
      })
    }
