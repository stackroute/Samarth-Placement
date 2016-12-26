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
  .factory("candidatePlacementFactory", ['$http',function($http) {
   var obj = {};
   obj.searchCandidates = function(profs){
        console.log("it is calling the searchJobs")
       return $http({
       method : 'GET',
       url : ''+profs
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