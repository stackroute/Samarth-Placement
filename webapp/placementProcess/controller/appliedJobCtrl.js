(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 	.controller('appliedJobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedJobFactory',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination,appliedJobFactory,circlesGetService,applyFactory) {
    
    appliedJobFactory.appliedJobs($stateParams.candidateid)
    .then(function(results) {
      $scope.results = results.data;
      console.log($scope.results);
      console.log("results:values"+$stateParams.candidateid);
      console.log(results);
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });
  }
  ])
})()