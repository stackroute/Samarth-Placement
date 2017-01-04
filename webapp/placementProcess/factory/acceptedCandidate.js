angular
  .module('samarth.placementProcess')
  .factory("acceptedCandidateFactory", ['$http',function($http) {
   let obj = {};
   obj.acceptedCandidates = function(jobcode){
       return $http({
       method : 'GET',
       url : '/placementprocess/acceptedCandidates/'+jobcode
       })
   }
   return obj;
	}])