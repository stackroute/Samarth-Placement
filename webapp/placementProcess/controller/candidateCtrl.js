 angular.module('samarth.placementProcess')
.controller('candidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'candiPlacement',
   'applyFactory',
   '$mdDialog',
   function($scope, 
    $stateParams, 
    Pagination,
    candiPlacement,
    applyFactory,
    $mdDialog) {
    $scope.prof=$stateParams.profession;
    console.log("it is calling the controller of candidateCtrl")
    candiPlacement.parsetext($stateParams.profession).then(function(results) {
      $scope.results = results;
      console.log("results of candidate")
      console.log(results)
      $scope.pagination = Pagination.getNew(4);
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