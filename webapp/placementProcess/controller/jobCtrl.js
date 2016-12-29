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
})()