angular.module('samarth.placementProcess')
 .controller('rejectedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'rejectedCandidateFactory',
   function($scope, 
    $stateParams, 
    Pagination, 
    rejectedCandidateFactory) {
    rejectedCandidateFactory.rejectedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }).catch(function(err){});
  }
])