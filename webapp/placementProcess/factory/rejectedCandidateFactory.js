(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("rejectedCandidateFactory", ['$http',function($http) {
   var obj = {};
   obj.rejectedCandidates = function(jobcode){
        console.log("it is calling the acceptedCandidates")
       return $http({
       method : 'GET',
       url : '/placementprocess/rejectedCandidates/'+jobcode
       })
   }
   return obj;
	}])
})();