(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("statusFactory", ['$http',function($http) {
   var obj = {};
   obj.status = function(cid,jobcode){
        console.log("it is calling the status")
       return $http({
       method : 'POST',
       url : '/placementprocess/status',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
	}])
})();