(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("appliedCandidateFactory", ['$http',function($http) {
   var obj = {};
   obj.appliedCandidates = function(jobcode){
        console.log("it is calling the appliedCandidates")
       return $http({
       method : 'GET',
       url : 'placementprocess/appliedCandidates/'+jobcode
       })
   }
   return obj;
	}])
})();