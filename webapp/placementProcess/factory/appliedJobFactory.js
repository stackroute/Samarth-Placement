angular
  .module('samarth.placementProcess')
  .factory("appliedJobFactory", ['$http',function($http) {
   let obj = {};
   obj.appliedJobs = function(candidateid){
       return $http({
       method : 'GET',
       url : 'placementprocess/appliedJobs/'+candidateid
       })
   }
   return obj;
	}])