(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('declinedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'circlesGetService',
   'applyFactory',
   'rejectFactory',
   'acceptFactory',
   'acceptedCandidateFactory',
   '$mdDialog',
   'declinedCandidateFactory',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory,rejectFactory,acceptFactory,acceptedCandidateFactory,$mdDialog,declinedCandidateFactory) {

    declinedCandidateFactory.declinedCandidates($stateParams.jobcode)
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