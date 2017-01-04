(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('rejectedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'circlesGetService',
   'applyFactory',
   'rejectFactory',
   'acceptFactory',
   'acceptedCandidateFactory',
   '$mdDialog',
   'rejectedCandidateFactory',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory,rejectFactory,acceptFactory,acceptedCandidateFactory,$mdDialog,rejectedCandidateFactory) {

    rejectedCandidateFactory.rejectedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      console.log("results:values"+$stateParams.jobcode);
      console.log(results);
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }).catch(function(err){console.log(err)});
    }
  ])
})();