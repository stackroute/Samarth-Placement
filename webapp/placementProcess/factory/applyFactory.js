angular
  .module('samarth.placementProcess')
  .factory("applyFactory", ['$http',function($http) {
   let obj = {};
   obj.applyJob = function(cid,jobcode){
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