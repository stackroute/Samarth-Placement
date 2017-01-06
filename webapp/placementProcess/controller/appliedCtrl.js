 angular.module('samarth.placementProcess')
 .controller('appliedCtrl', ['$scope',
   '$stateParams',
   '$state',
   function($scope, 
    $stateParams,
    $state) {
      $scope.jobcode = $stateParams.jobcode;
      $state.go('index.applied.appliedCandidate', {'jobcode':$stateParams.jobcode});
   }
  ])