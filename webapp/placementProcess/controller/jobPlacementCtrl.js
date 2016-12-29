(function(){
 'use strict'
 angular.module('samarth.placementProcess')
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

      $mdDialog.show(
        $mdDialog.confirm()
          .title('Apply')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Please do it!')
          .cancel('Sounds like a scam');
        );

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
      
    }
  }
  ])
})();