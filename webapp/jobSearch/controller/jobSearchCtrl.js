angular
  .module('samarth.jobSearch')
	.controller('jobSearchCtrl', function($rootScope, $scope, $http) {
	$scope.s=function(key){
		$http.get("jobSearch/data/jobSearchData.json").then(function(response) {
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
	              // console.log(title);
					//  var o=$scope.result[i].Title
					//   arrayspace={"Title":o};
					//
			  arrayspace.push($scope.result[i]);
					// arrayspace[1]=$scope.push(result[i].language);
					// var foo=$scope.arrayspace;
			  $rootScope.$broadcast('san',arrayspace);
			  // console.log("kartik"+arrayspace);
	        }
			else {
			 	// console.log("no");
						}
		 	}
			})
		}
});
