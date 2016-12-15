(function(){
  'use strict'
angular
    .module('samarth.jobSearch',[])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index.jobSearch', {
                  url:'jobsearch',
                  views: {
                        "content@": {
                            templateUrl: './jobSearch/template/jobSearch.html',
                            controller: 'jobSearchCtrl'
                        }
                    },
                })
                .state('index.jobSearch.results', {
                    url: '/jobslist/:searchText?',
                    views: {
                        "results": {
                            templateUrl: './jobSearch/template/jobSearchResult.html',
                            //templateUrl: './samarth-webcomponents/jobSearch/template/jobSearchResult.html',
                            /*controller: 'jobSearchCtrl'*/
                        }
                    },
                })
        }
    ]);
  })(); 
