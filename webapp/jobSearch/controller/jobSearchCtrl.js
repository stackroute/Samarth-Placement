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
         $scope.pagination = Pagination.getNew(4);
        	
           /*if ($stateParams.searchText !== undefined ) {
           		searchJob($stateParams.searchText);
           }*/
        $scope.searchJob = function(searchText) {
        	  //var arr=key.split(/[ ,]+/);
            jobSearchFactory.searchJobDetails()
                .then(function successCallbackfun(response) {
                        $scope.result = response.data;
                        console.log($scope.result);
                        $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
                        $scope.message = "";
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



