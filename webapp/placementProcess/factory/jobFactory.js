(function(){
 'use strict'
angular
  .module('samarth.placementProcess')
  .factory("jobFactory", ['$http',function($http) {
   var obj = {};
   obj.searchJobs = function(profs){
        console.log("it is calling the searchJobs")
       return $http({
       method : 'GET',
       url : '/jobProfile/jobsByProfession/'+profs
       })
   }
   return obj;
}])
  .factory("applyFactory", ['$http',function($http) {
   var obj = {};
   obj.applyJob = function(cid,jobcode){
        console.log("it is calling the applyJobs")
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

  .factory("appliedJobFactory", ['$http',function($http) {
   var obj = {};
   obj.appliedJobs = function(candidateid){
        console.log("it is calling the appliedjobs")
       return $http({
       method : 'GET',
       url : 'placementprocess/appliedJobs/'+candidateid
       })
   }
   return obj;
}])
  .factory("acceptFactory", ['$http',function($http) {
   var obj = {};
   obj.accept = function(cid,jobcode){
        console.log("it is calling the acceptjobs"+jobcode+cid)
       return $http({
       method : 'POST',
       url : '/placementprocess/offer',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
}])
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
  .service('candiPlacement', ['$http',
    function($http) {
        return {

            parsetext: function(arr) {
                return $http({
                    method: 'post',
                    url: '/candidate/search',
                    data: {
                        searchquery: arr
                    }
                }).then(function success(response) {
                    console.log("parsetext", response.data);
                    return response.data;
                }, function error(err) {
                    console.log(err);
                    return [];
                });
            }
        }


    }
])
})();