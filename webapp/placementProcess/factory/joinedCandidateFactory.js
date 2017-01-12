angular
  .module('samarth.placementProcess')
  .factory('joinedCandidateFactory', ['$http',
    function($http) {
   let obj = {};
   obj.joinedCandidates = function(jobcode){
       return $http({
       method: 'GET',
       url: 'placementprocess/joinedCandidates/'+jobcode
       })
   }
   return obj;
	}])