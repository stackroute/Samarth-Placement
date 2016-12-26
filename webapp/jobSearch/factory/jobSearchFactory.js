(function(){
 'use strict'
angular
  .module('samarth.jobSearch')
  .factory("jobSearchFactory", ['$http',function($http) {
   var obj = {};
   obj.searchJobDetails = function(){
       return $http.get('/jobProfile/getJobs');
   }
  obj.searchJobs = function(searchTxt,profs){
       return $http({
       method : 'GET',
       url : '/jobProfile/searchJobs/'+searchTxt+'/'+profs,
       })
   }
 obj.searchJobsByProfession = function(profs){
     console.log("in jobs fac by pro");
     console.log(profs+"single val");
         return $http({
         method : 'GET',
         url : '/jobProfile/jobsByProfession/'+profs,
         })
     }
   return obj;
}]);
})();
