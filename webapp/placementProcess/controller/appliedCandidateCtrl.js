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
   'acceptedCandidateFactory',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory,rejectFactory,acceptFactory,acceptedCandidateFactory) {
    
    appliedCandidateFactory.appliedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      console.log("results:values"+$stateParams.jobcode);
      console.log(results);
      acceptedCandidateFactory.acceptedCandidates($stateParams.jobcode)
        .then(function(acceptedCandit){
          console.log(results.data)
          results.data.forEach(function(applied){
            applied.acceptedDetail = false;
            acceptedCandit.data.forEach(function(accepted){
              console.log("accept or reject"+applied.candidates+"  "+accepted.candidateid)
              if(applied.candidates==accepted.candidateid)
              {
                applied.acceptedDetail = true;
              }
            })
          })
        }).catch(function(err){console.log(err)})
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    $scope.accept=function(cid){
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
      alert(cid+"offered to the job:");
    }

    $scope.reject=function(cid){
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
      alert(cid+"rejected to the job:");
    }

  }
  ])
})();