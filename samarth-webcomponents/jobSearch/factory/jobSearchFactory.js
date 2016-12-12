(function(){
  'use strict'
 angular
   .module('samarth-webcomponents')  
   .factory("jobSearchFactory", ['$http',function($http){  
    var obj = {};
    obj.searchJobDetails = function(){ 
        //return $http.get('./samarth-webcomponents/jobSearch/jobSearchData/jobSearchData.json');
        return $http.get('/jobProfile/getJobs');
    }
    return obj;
}]);
})();
   
