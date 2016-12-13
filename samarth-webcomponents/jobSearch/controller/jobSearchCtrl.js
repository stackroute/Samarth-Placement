(function(){
  'use strict'
angular
	  .module('samarth-webcomponents')
		.controller('jobSearchCtrl', function($rootScope,jobSearchFactory, $scope, $http) {
		  	var vm = this;
		  	vm.result = [{}];
		    vm.title="";

		  	$scope.searchfun=function(key){

		  	vm.arrayspace=[];
		  	vm.arrayLength=0;

		  	jobSearchFactory.searchJobDetails().then(function(response){
				//1st line is for my json 
				//vm.result = response.data.Search;
				vm.result=response.data;
				//console.log($scope.result);
				vm.arrayLength=vm.result.length;
				
	      for(var i=0;i<vm.arrayLength;i++){

				 	vm.title=vm.result[i].title;
					if(vm.title==$scope.searchString)
					{	
			     vm.arrayspace.push(vm.result[i]);
					 $rootScope.$broadcast('san',vm.arrayspace);
					}
					else{
					 	
					}
			 	}
				},
				function (err)
				{
					alert("Result Not Found"+err);
				}

				)
			}
	});
})();



