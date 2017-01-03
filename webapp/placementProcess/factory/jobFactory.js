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
})();
