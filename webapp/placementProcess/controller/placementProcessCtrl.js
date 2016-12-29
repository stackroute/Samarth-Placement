//all controllers are in this file this no need --delete it--
(function(){
 'use strict'
 angular.module('samarth.placementProcess')
 .controller('jobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'jobFactory',
   'circlesGetService',
   'applyFactory',
   'statusFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination,jobFactory,circlesGetService,applyFactory,statusFactory,$mdDialog) 
   {
    jobFactory.searchJobs($stateParams.profession)
    .then(function successCallbackfun(response) {
      console.log($stateParams.profession);
      console.log("helloooooooooooooooo",response.data.length);
      $scope.result = response.data;
      $scope.pagination = Pagination.getNew(4);
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

    var i=0;
    $scope.check=function()
    {
      alert(i++);
    }
    //status checking using api
    $scope.status=function(jobcode)
    {
      statusFactory.status($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
        console.log("the response of the status cand and job:");
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(jobcode+"status"+$stateParams.candidateid);
    }

    $scope.apply = function(jobcode) {
      applyFactory.applyJob($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
        console.log(response);        
        $scope.showApplyAlert({});
      },function errorCallbackfun(error){
        console.log(error);
        $scope.showApplyAlert({});
      },
      function(err)
      {
        $scope.message = err;
      })
      /*$mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title("Message")
            .textContent(jobcode+"suggested to the candidateid:"+$stateParams.candidateid)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            );*/
          }

          $scope.showApplyAlert = function(ev) {
            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('This is an alert title')
              .textContent('You can specify some description text in here.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Got it!')
              .fullscreen(false)
              );
          };
        }
        ])

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
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title("Message")
        .textContent(cid+"Sugested to the job:"+$stateParams.jobcode)
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
   'statusFactory',
   function($scope, $stateParams, Pagination,candiPlacement,circlesGetService,applyFactory,$mdDialog,statusFactory) {
    $scope.prof=$stateParams.profession;
    candiPlacement.parsetext($stateParams.profession).then(function(results) {
      $scope.results = results;
      $scope.pagination = Pagination.getNew(4);
      $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
      console.log(results);
      for(i=0;i<results.length;i++)
      {
        statusFactory.status(results[i].candidateid,$stateParams.jobcode)
        .then(function successCallbackfun(response){
          console.log(response.data[0].candidateid);
          results.forEach(function(candidate)
          {
            if(candidate.candidateid==response.data[0].candidateid)
            {
              console.log("candidateid:"+candidate.candidateid)
              if(response.data[0].status=="applied")
              {
                candidate.applyStatus=true
              }
              else{
                candidate.applyStatus=false
              }
              console.log("applied status:"+candidate.applyStatus)
            }
          })
        },function errorCallbackfun(error){
          console.log(error);
        },
        function(err)
        {
          $scope.message = err;
        })

      }


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
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title("Message")
        .textContent(cid+"Sugested to the job:"+$stateParams.jobcode)
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
      console.log("results:values"+$stateParams.jobcode);
      console.log(results);
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
 .controller('jobPlacementCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'jobFactory',
   'circlesGetService',
   'applyFactory',
   'statusFactory',
   '$mdDialog',
   function($scope, $stateParams, Pagination,jobFactory,circlesGetService,applyFactory,statusFactory,$mdDialog) 
   {
    jobFactory.searchJobs($stateParams.profession)
    .then(function successCallbackfun(response) {
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
      console.log("outside for loop");
      $scope.statusResponce=[];
      for(i=0;i<response.data.length;i++)
      {
        statusFactory.status($stateParams.candidateid,response.data[i].jb.jobcode)
        .then(function successCallbackfun(response){
          console.log("result and status")
          $scope.result.forEach(function(job)
          {
            
            if(job.jb.jobcode==response.data[0].jobcode)
            {
              console.log(job.jb.jobcode)
              if(response.data[0].status=="applied")
              {
                job.jb.applyStatus=true
              }
              else{
                job.jb.applyStatus=false
              }
              console.log(job.jb.applyStatus)
            }
          })
          console.log($scope.result);
          $scope.statusResponce.push(response.data);
          console.log(response.data);
          console.log("the response of the status cand and job:");
          console.log(response);
        },function errorCallbackfun(error){
          console.log(error);
        },
        function(err)
        {
          $scope.message = err;
        })
        console.log(response.data[i].jb.jobcode+"status"+$stateParams.candidateid);
      }
    },
    function errorCallbackfun(response) {
     console.log("some error occured");
     $scope.message = "Some Error Occured ";
   },
   function (err)
   {
     $scope.message = err;
   })
    console.log("last should display");
    var i=0;
    $scope.check=function()
    {
      alert(i++);
    }
    //status checking using api
    $scope.status=function(jobcode)
    {
      statusFactory.status($stateParams.candidateid,jobcode)
      .then(function successCallbackfun(response){
        console.log("the response of the status cand and jobsfdsfdsfsd:");
        console.log(response);
      },function errorCallbackfun(error){
        console.log(error);
      },
      function(err)
      {
        $scope.message = err;
      })
      alert(jobcode+"status"+$stateParams.candidateid);
    }

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
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title("Message")
        .textContent(jobcode+"suggested to the candidateid:"+$stateParams.candidateid)
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        );
    }
  }
  ])
 .controller('appliedJobCtrl', ['$scope',
   '$stateParams',
   'Pagination',
   'appliedJobFactory',
   'circlesGetService',
   'applyFactory',
   function($scope, $stateParams, Pagination,appliedJobFactory,circlesGetService,applyFactory) {
    
    appliedJobFactory.appliedJobs($stateParams.candidateid)
    .then(function(results) {
      $scope.results = results.data;
      console.log($scope.results);
      console.log("results:values"+$stateParams.candidateid);
      console.log(results);
      $scope.pagination = Pagination.getNew(3);
      $scope.pagination.numPages = Math.ceil(results.data.length / $scope.pagination.perPage);
    }, function err(err) {
      $scope.message = err;
    });
  }
  ]);
})();
