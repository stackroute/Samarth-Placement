(function(){
  'use strict'
angular.module('samarth.jobSearch')
    .controller('jobSearchCtrl', ['$scope',
      '$stateParams',
      'Pagination',
      'jobSearchFactory',
      function($scope, $stateParams, Pagination,jobSearchFactory) {
        /* var searchQueryStr = $stateParams.searchstr;
         jobSearchFactory.searchJobDetails(searchQueryStr).then*/
      //  $scope.pagination = Pagination.getNew(4);
        console.log("before indexing");
      //  if ($stateParams.searchText !== undefined ) {
      //          $scope.searchJob($stateParams.searchText);
      //      }
        $scope.searchJob = function(searchText) {
          //var arr=key.split(/[ ,]+/);
          console.log("hello from ctrl");
          jobSearchFactory.searchJobDetails()
              .then(function successCallbackfun(response) {
                 $scope.result = response.data;
                 console.log($scope.result);
                 $scope.pagination = Pagination.getNew(4);
                 $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
                 $scope.message = "";
                 /*for(int i=0;i<=response.data.length;i++)
                 {
                  if(result[i].title != searchText)
                  {
                    $scope.message = "No Result Found !";
                  }
                 }*/
                 if (response.data.length == 0) {
                   $scope.message = "No Result Found ! Please Enter Value For Results";
                 }
                 else{
                   $scope.message="Showing " + response.data.length + " Results for Job Search";
                 }
                 },
                /*function errorCallbackfun(response) {
                  console.log("some error occured");
                  $scope.message = "Some Error Occured ";
                },*/
                function (err)
                 {
                  $scope.message = err;
                  //console.log($scope.message);
                 }
              )
        };
    }]);
})();
