(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('appliedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'circlesGetService',
   'applyFactory',
   'rejectFactory',
   'acceptFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory,rejectFactory,acceptFactory,$mdDialog) {
    
    appliedCandidateFactory.appliedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      console.log("results:values"+$stateParams.jobcode);
      console.log(results);
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    $scope.accept=function(cid){

      var confirm = $mdDialog.confirm()
          .title('Apply')
          .textContent('You are about to accept the candidate for job!, please confirm..!')
          .ok('Confirm')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
      console.log("accept is calling")
      acceptFactory.accept(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
    })

    }

    $scope.reject=function(cid){

      var confirm = $mdDialog.confirm()
          .title('Apply')
          .textContent('You are about to reject the candidate for job, please confirm..!')
          .ok('Confirm')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
      rejectFactory.reject(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
    })
    }

  }
  ])
})();