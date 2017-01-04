(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("joinedCandidateFactory", ['$http',function($http) {
   var obj = {};
   obj.joinedCandidates = function(jobcode){
        console.log("it is calling the joinedCandidates")
       return $http({
       method : 'GET',
       url : 'placementprocess/joinedCandidates/'+jobcode
       })
   }
   return obj;
	}])
})();