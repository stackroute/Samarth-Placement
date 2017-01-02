(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("applyFactory", ['$http',function($http) {
   var obj = {};
   obj.applyJob = function(cid,jobcode){
        console.log("it is calling the applyJobs"+cid+jobcode)
       return $http({
       method : 'POST',
       url : '/placementprocess/apply/',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
	}])
})();