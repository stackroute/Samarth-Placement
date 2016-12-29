(function() {
 'use strict';
 angular.module('samarth.placementProcess')
 .controller('jobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'jobFactory',
   'circlesGetService',
   'applyFactory',
   'statusFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination, jobFactory,
    circlesGetService, applyFactory, statusFactory, $mdDialog) {
    let i = 0;
    jobFactory.searchJobs($stateParams.profession)
    .then(function successCallbackfun(response) {
      $scope.result = response.data;
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
      $scope.message = '';
      if (response.data.length === 0) {
        $scope.message = 'No Result Found ! Enter Text to Get Jobs';
      }
      else{
        $scope.message = 'Showing ' + response.data.length + ' Results for Job Search';
      }
    },
    function errorCallbackfun() {
     $scope.message = 'Some Error Occured ';
   },
   function (err)
   {
     $scope.message = err;
    }
  );

    $scope.check = function()
    {
      alert(i = i + 1);
    }
    // status checking using api
    $scope.status = function(jobcode)
    {
      statusFactory.status($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
      },function errorCallbackfun(error){
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(jobcode + 'status' + $stateParams.candidateid);
    }

    $scope.apply = function(jobcode)
    {
      applyFactory.applyJob($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
      },function errorCallbackfun(error){
      },
      function(err)
      {
        $scope.message = err;
      })
      $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Message')
            .textContent(jobcode + 'suggested to the candidateid:' + $stateParams.candidateid)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        );
    }
  }
  ])
 .controller('candidatePlacementCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'candiPlacement',
   'circlesGetService',
   'applyFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination, candiPlacement, circlesGetService, applyFactory, $mdDialog) {
    $scope.prof = $stateParams.profession;
    candiPlacement.parsetext($stateParams.profession).then(function(results) {
      $scope.results = results;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    var i = 0;
    $scope.check = function()
    {
      alert(i = i + 1);
    }
    $scope.apply = function(cid)
    {
      applyFactory.applyJob(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
      },function errorCallbackfun(error){
      },
      function(err)
      {
        $scope.message = err;
      })
      $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Message')
            .textContent(cid + 'Sugested to the job:' + $stateParams.jobcode)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        );
    }

  }
  ])
 .controller('appliedCandidateCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedCandidateFactory',
   'circlesGetService',
   'applyFactory',
   'rejectFactory',
   'acceptFactory',
   function($scope, $stateParams, Pagination,appliedCandidateFactory,circlesGetService,applyFactory,rejectFactory,acceptFactory) {
    
    appliedCandidateFactory.appliedCandidates($stateParams.jobcode)
    .then(function(results) {
      $scope.results = results.data;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });

    $scope.accept = function(cid){
      acceptFactory.accept(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
      },function errorCallbackfun(error){
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(cid + 'offered to the job:');
    }

    $scope.reject = function(cid){
      rejectFactory.reject(cid,$stateParams.jobcode)
      .then(function successCallbackfun(response){
      },function errorCallbackfun(error){
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(cid + 'rejected to the job:');
    }

  }
  ])
 .controller('appliedJobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedJobFactory',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination, appliedJobFactory, circlesGetService, applyFactory) {
    appliedJobFactory.appliedJobs($stateParams.candidateid)
    .then(function(results) {
      $scope.results = results.data;
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });
  }
  ]);
})();
