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
    return obj;
}]);
})();

// (function(){
//   'use strict'
// angular
//   .module('samarth.jobSearch')
//   .factory("jobSearchFactory", ['$http',function($http) {
//     var obj = {
//     	searchJobDetails:searchJobDetails,
//     	searchJobsbyId:searchJobsbyId
//     };
//     return obj;

//     obj.searchJobDetails = function(){
//         //return $http.get('./samarth-webcomponents/jobSearch/jobSearchData/jobSearchData.json');
//         return $http.get('/jobProfile/getJobs');
//     }
//     obj.searchJobsbyId =function(jobcode){
//     	return $http.get('/jobProfile/'+jobcode);
//     }
//   }]);
// })();