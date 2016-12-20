(function(){
 'use strict'
angular.module('samarth.jobSearch')
  .controller('jobSearchCtrl', ['$scope',
     '$stateParams',
     'Pagination',
     'jobSearchFactory',
     'circlesGetService',
     function($scope, $stateParams, Pagination,jobSearchFactory,circlesGetService) {
       console.log("Inside JobSearch Ctrl before indexing");
      if ($stateParams.searchText !== undefined ) {
            $scope.searchJob($stateParams.searchText);
        }
        else{
            // $scope.message = "Enter Text To Search For Jobs";
        }
      console.log("params value after checking "+ $stateParams.searchText);

     var profs="";
     circlesGetService.getCircle()
        .then(function(response) {
           $scope.profiling = response.data;
           for(var i=0;i<response.data.length;i++){
             profs+=response.data[i].name+"-";
           }
            console.log("circles arrray "+profs);
         }, 
         function(err) {
            console.log("circles array "+err);
         });

       $scope.searchJob = function(searchText) {
         //var arr=key.split(/[ ,]+/);
         console.log("params inside fun " + searchText);
            //jobSearchFactory.searchJobDetails()
            jobSearchFactory.searchJobs(searchText,profs)
             .then(function successCallbackfun(response) {
                $scope.result = response.data;
                console.log($scope.result);
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
       };
   }]);
})();
