angular
  .module('samarth.placementProcess')
  .factory('rejectFactory', ['$http',
    function($http) {
   let obj = {};
   obj.reject = function(cid,jobcode) {
       return $http({
       method: 'POST',
       url: '/placementprocess/reject',
       data:{
        candidateid:cid,
        jobcode:jobcode
       }
       })
   }
   return obj;
	}])