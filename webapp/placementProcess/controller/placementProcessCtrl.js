(function(){
 'use strict'
angular.module('samarth.placementProcess')
  .controller('jobCtrl', ['$scope',
     '$stateParams',
     'Pagination',
     'jobFactory',
     'circlesGetService',
     function($scope, $stateParams, Pagination,jobFactory,circlesGetService) {
       var profession='Civil Avitation'
        jobFactory.searchJobs(profession)
             .then(function successCallbackfun(response) {
                $scope.result = response.data;
                $scope.pagination = Pagination.getNew(6);
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


       }
   ]);
})();
