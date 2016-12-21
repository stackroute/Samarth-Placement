(function(){
  'use strict'
angular
  .module('samarth.jobSearch',[])
  .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('index.jobSearch', {
            url:'/jobsearch/:circleName?/:circleDomain?',
            views: {
              "content@": {
                templateUrl: './jobSearch/template/jobSearch.html',
                controller: 'jobSearchCtrl'
               }
            },
            resolve: {
                circleName: ['$stateParams', function($stateParams) {
                            return $stateParams.circleName;
                }],
                circleDomain: ['$stateParams', function($stateParams) {
                            return $stateParams.circleDomain;
                }]
            }
           })
          .state('index.jobSearch.results', {
            url: '/jobslist/:searchText?',
              views: {
                "results": {
                   templateUrl: './jobSearch/template/jobSearchResult.html',
                   controller: 'jobSearchCtrl'
                  }
              },
           })
        }
    ]);
})();
