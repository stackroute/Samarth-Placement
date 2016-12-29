(function() {
 'use strict';
angular
  .module('samarth.placementProcess')
  .factory('jobFactory', ['$http', function($http) {
   let obj = {};
   obj.searchJobs = function(profs) {
       return $http({
       method: 'GET',
       url: '/jobProfile/jobsByProfession/' + profs
       });
   };
   return obj;
}])
  .factory('applyFactory', ['$http', function($http) {
   let obj = {};
   obj.applyJob = function(cid, jobcode) {
       return $http({
       method: 'POST',
       url: '/placementprocess/apply/',
       data: {
        candidateid: cid,
        jobcode: jobcode
       }
       });
   };
   return obj;
}])
  .factory('appliedCandidateFactory', ['$http', function($http) {
   let obj = {};
   obj.appliedCandidates = function(jobcode) {
       return $http({
       method: 'GET',
       url: 'placementprocess/appliedCandidates/' + jobcode
       });
   };
   return obj;
}])

  .factory('appliedJobFactory', ['$http', function($http) {
   let obj = {};
   obj.appliedJobs = function(candidateid) {
       return $http({
       method: 'GET',
       url: 'placementprocess/appliedJobs/' + candidateid
       });
   };
   return obj;
}])
  .factory('acceptFactory', ['$http', function($http) {
   let obj = {};
   obj.accept = function(cid, jobcode) {
       return $http({
       method: 'POST',
       url: '/placementprocess/offer',
       data: {
        candidateid: cid,
        jobcode: jobcode
       }
       });
   };
   return obj;
}])
  .factory('rejectFactory', ['$http', function($http) {
   let obj = {};
   obj.reject = function(cid, jobcode) {
       return $http({
       method: 'POST',
       url: '/placementprocess/reject',
       data: {
        candidateid: cid,
        jobcode: jobcode
       }
       });
   };
   return obj;
}])

  .factory('statusFactory', ['$http', function($http) {
   let obj = {};
   obj.status = function(cid, jobcode) {
       return $http({
       method: 'POST',
       url: '/placementprocess/status',
       data: {
        candidateid: cid,
        jobcode: jobcode
       }
       });
   };
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
                    return response.data;
                }, function error() {
                    return [];
                });
            }
        };
    }
]);
}());
