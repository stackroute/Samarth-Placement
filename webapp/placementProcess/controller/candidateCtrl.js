(function(){
 'use strict'
 angular.module('samarth.placementProcess')
.controller('candidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'candiPlacement',
   'circlesGetService',
   'applyFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination,candiPlacement,circlesGetService,applyFactory,$mdDialog) {
    $scope.prof=$stateParams.profession;
    candiPlacement.parsetext($stateParams.profession).then(function(results) {
      $scope.results = results;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    var i=0;
    $scope.check=function()
    {
      alert(i++);
    }
    $scope.apply=function(cid)
    {
      applyFactory.applyJob(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
        console.log(response);
        $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title("Message")
            .textContent(cid+"Sugested to the job:"+$stateParams.jobcode)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        );
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      
    }

  }
  ])
})();
