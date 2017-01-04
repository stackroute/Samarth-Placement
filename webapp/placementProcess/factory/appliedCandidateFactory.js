angular
  .module('samarth.placementProcess')
  .factory('appliedCandidateFactory', ['$http',
    function($http) {
   let obj = {};
   obj.appliedCandidates = function(jobcode) {
       return $http({
       method: 'GET',
       url: 'placementprocess/appliedCandidates/'+jobcode
       })
   }
   return obj;
	}])