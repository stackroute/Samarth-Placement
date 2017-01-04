(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("declinedCandidateFactory", ['$http',function($http) {
   var obj = {};
   obj.declinedCandidates = function(jobcode){
        console.log("it is calling the declinedCandidates")
       return $http({
       method : 'GET',
       url : 'placementprocess/declinedCandidates/'+jobcode
       })
   }
   return obj;
	}])
})();