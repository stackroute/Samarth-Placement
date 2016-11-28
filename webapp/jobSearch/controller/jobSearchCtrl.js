angular

     .module('samarth.jobSearch')

     .controller('jobSearchCtrl', function($rootScope, $scope, $http){
      
	 $scope.s=function(key){
		 $http.get("jobSearch/newFolder/jobSearchData.json").then(function(response) {
    	/*console.log(response);*/
			 var searchString=$scope.searchString;
				console.log(searchString);
         $scope.result = response.data.Search;
				  var arrayLength=$scope.result.length;
					console.log(arrayLength);
					var i=0;
					var arrayspace={};
					for(i=0;i<arrayLength;i++)
					{
				 	var title=$scope.result[i].Title;
					if(title==searchString)
					{
              console.log(title);
							// var o=$scope.result[i].Title
							//  arrayspace={"Title":o};

							arrayspace[i].Experiance=$scope.result[i].Experience;
							arrayspace[i].Language=scope.result[i].language;
							console.log(arrayspace[i]);
			     }
					 else {
					 	console.log("no");
					 }
				 }
				 var foo=$scope.arrayspace;
				 $rootScope.$broadcast('san',arrayspace);
				 console.log("kartik"+arrayspace);



	})
}
});
    