angular
  .module('samarth.placementProcess')
  .factory("declinedCandidateFactory", ['$http',function($http) {
   let obj = {};
   obj.declinedCandidates = function(jobcode){
       return $http({
       method : 'GET',
       url : 'placementprocess/declinedCandidates/'+jobcode
       })
   }
   return obj;
	}])