(function(){
 'use strict'
 angular.module('samarth.placementProcess')
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


    $scope.applyToCandidate = function(jobcode,key)
    {

      // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Apply')
          .textContent('You are about to apply for job "' + jobcode + '", please confirm..!')
          .ok('Confirm')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
      $scope.flag[key]=true;
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
      $scope.status = '';
    }, 
    function() {
      //cancel part

    }); 
    }


    $scope.flag=[];
    $scope.applyToCandidate=function(cid,key)
    {

      var confirm = $mdDialog.confirm()
          .title('Apply')
          .textContent('You are about to apply candidate to job "' + $stateParams.jobcode + '", please confirm..!')
          .ok('Confirm')
          .cancel('Cancel');


      $mdDialog.show(confirm).then(function() {
            $scope.flag[key]=true;
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
        },
        function(){

        })
    }

  }
  ])
})()