(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('jobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'jobFactory',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination,jobFactory,circlesGetService,applyFactory) {
    jobFactory.searchJobs($stateParams.profession)
    .then(function successCallbackfun(response) {
      console.log($stateParams.profession);
      $scope.result = response.data;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
      $scope.message = "";
      if (response.data.length == 0) {
        $scope.message = "No Result Found ! Enter Text to Get Jobs";
      }
      else{
        $scope.message="Showing " + response.data.length + " Results for Job Search";
      }
    },
    function errorCallbackfun(response) {
     console.log("some error occured");
     $scope.message = "Some Error Occured ";
   },
   function (err)
   {
     $scope.message = err;
                 //console.log($scope.message);
    }
  )
    $scope.apply=function(jobcode)
    {
      applyFactory.applyJob($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(jobcode+"suggested to the candidateid:"+$stateParams.candidateid);
    }
  }
  ])
 .controller('candidatePlacementCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'candiPlacement',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination,candiPlacement,circlesGetService,applyFactory) {
    $scope.prof=$stateParams.profession;
    candiPlacement.parsetext($stateParams.profession).then(function(results) {
      $scope.results = results;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    $scope.apply=function(cid)
    {
      applyFactory.applyJob(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(cid+"Sugested to the job:"+$stateParams.jobcode);
    }

  }
  ])
 .controller('appliedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory) {
    
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
  }
  ]);
})();
