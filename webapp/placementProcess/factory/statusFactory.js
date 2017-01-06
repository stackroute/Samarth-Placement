angular
  .module('samarth.placementProcess')
  .factory('statusFactory', ['$http',
    function($http) {
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
	}]);
