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
}]);
})();