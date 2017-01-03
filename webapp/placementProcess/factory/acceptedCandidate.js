(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("acceptedCandidateFactory", ['$http',function($http) {
   var obj = {};
   obj.acceptedCandidates = function(jobcode){
        console.log("it is calling the acceptedCandidates")
       return $http({
       method : 'GET',
       url : '/placementprocess/acceptedCandidates/'+jobcode
       })
   }
   return obj;
	}])
})();