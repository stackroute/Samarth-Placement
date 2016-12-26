(function(){
 'use strict'
angular.module('samarth.placementProcess')
  .controller('jobCtrl', ['$scope',
     '$stateParams',
     'Pagination',
     'jobFactory',
     'circlesGetService',
     function($scope, $stateParams, Pagination,jobFactory,circlesGetService) {
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


       }
   ])
  .controller('candidatePlacementCtrl', ['$scope',
     '$stateParams',
     'Pagination',
     'candiPlacement',
     'circlesGetService',
     function($scope, $stateParams, Pagination,candiPlacement,circlesGetService) {
              candiPlacement.parsetext("Retail").then(function(results) {
                    $scope.results = results;
                    $scope.pagination = Pagination.getNew(3);
                    $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
                }, function err(err) {
                    $scope.message = err;
                });

       }
   ]);
})();
