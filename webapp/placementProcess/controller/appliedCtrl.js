(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('appliedCtrl', ['$scope',
   '$stateParams',
   '$mdDialog',
   '$state',
   function($scope, $stateParams,$mdDialog,$state) {
      $scope.jobcode = $stateParams.jobcode;
      $state.go('index.applied.appliedCandidate', {'jobcode':$stateParams.jobcode})

   }
  ])
})();