 angular.module('samarth.placementProcess')
 .controller('declinedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'declinedCandidateFactory',
   function($scope, 
    $stateParams, 
    Pagination,
    declinedCandidateFactory) {

    declinedCandidateFactory.declinedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }).catch(function(err){console.log(err)});
    }
  ])