angular
  .module('samarth.jobSearch')
  .factory('jobSearchFactory', ['$http', function($http) {
  let obj = {};
  obj.searchJobDetails = function() {
       return $http.get('/jobProfile/getJobs');
   };
  obj.searchJobs = function(searchTxt, profs) {
       return $http({
       method: 'GET',
       url: '/jobProfile/searchJobs/' + searchTxt + '/' + profs
       });
   };
  obj.searchJobsByProfession = function(profs) {
        return $http({
        method: 'GET',
        url: '/jobProfile/jobsByProfession/' + profs
       });
   };
  return obj;
}]);
