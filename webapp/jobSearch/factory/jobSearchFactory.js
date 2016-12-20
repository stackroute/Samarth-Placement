(function(){
 'use strict'
angular
  .module('samarth.jobSearch')
  .factory("jobSearchFactory", ['$http',function($http) {
   var obj = {};
   obj.searchJobDetails = function(){
       //return $http.get('./samarth-webcomponents/jobSearch/jobSearchData/jobSearchData.json');
       return $http.get('/jobProfile/getJobs');
   }

   obj.searchJobs = function(searchTxt,profs){
       return $http({
       method : 'GET',
       url : '/jobProfile/searchJobs/'+searchTxt+'/'+profs,
       // params:{
       //     searchTxt:searchTxt,
       //     profs:profs
       // }
       })
   }
   return obj;
}]);
})();