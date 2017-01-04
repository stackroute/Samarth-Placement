angular
  .module('samarth.placementProcess')
  .factory("rejectedCandidateFactory", ['$http',function($http) {
   let obj = {};
   obj.rejectedCandidates = function(jobcode){
       return $http({
       method : 'GET',
       url : '/placementprocess/rejectedCandidates/'+jobcode
       })
   }
   return obj;
	}])