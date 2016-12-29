(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("rejectFactory", ['$http',function($http) {
   var obj = {};
   obj.reject = function(cid,jobcode){
        console.log("it is calling the appliedjobs")
       return $http({
       method : 'POST',
       url : '/placementprocess/reject',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
	}])
})();