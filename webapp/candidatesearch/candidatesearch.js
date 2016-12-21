angular
  .module('samarth.candidatesearch',[])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

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
            controller: 'candidatesearchctrl'
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
          }
        }
      })
    }
  ]);
