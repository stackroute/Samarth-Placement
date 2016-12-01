angular
   .module('samarth.jobSearch')
	 .controller('jobSearchCtrl', function($rootScope, $scope, $http) {
	  $scope.s=function(key){
		$http.get("jobSearch/jobSearchData/jobSearchData.json").then(function(response) {
    var searchString=$scope.searchString;
			// console.log(searchString);
			$scope.result = response.data.Search;
			var arrayLength=$scope.result.length;
			var i=0;
			var arrayspace=[];
      for(i=0;i<arrayLength;i++){
		 	var title=$scope.result[i].Title;
			if(title==searchString)
			{
	     arrayspace.push($scope.result[i]);
			 $rootScope.$broadcast('san',arrayspace);
			}
			else {
			 	// console.log("no");
			  }
		 	}
			})
		}
});
