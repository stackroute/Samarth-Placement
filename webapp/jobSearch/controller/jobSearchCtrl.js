/*(function(){
  'use strict'
angular
	  .module('samarth.jobSearch')
		.controller('jobSearchCtrl', function(jobSearchFactory, $scope) {
		  	var vm = this;
		  	$scope.result = [{}];
		  	$scope.jobs=[{}];
		    vm.title="";

		  	$scope.searchJob=function(key){
		  		// console.log('key ',key);

		  	vm.arrayspace=[];
		  	vm.arrayLength=0;

		  	jobSearchFactory.searchJobDetails().then(function(response){
				//1st line is for my json 
				//vm.result = response.data.Search;
				$scope.result=response.data;
				console.log($scope.result);
				// vm.arrayLength=vm.result.length;
				
	    //   for(var i=0;i<vm.arrayLength;i++){

				 // 	vm.title=vm.result[i].title;
					// if(vm.title==$scope.searchString)
					// {	
			  //    vm.arrayspace.push(vm.result[i]);
					//  $rootScope.$broadcast('san',vm.arrayspace);
					// }
					// else{
					 	
					// }
			 	// }
				},
				function (err)
				{
					alert("Result Not Found"+err);
				}
				)
			}
	});
})();*/

(function(){
  'use strict'
angular.module('samarth.jobSearch')
    .controller('jobSearchCtrl', ['$scope','$stateParams', 'Pagination','jobSearchFactory', function($scope, $stateParams, Pagination,jobSearchFactory) {
        

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



