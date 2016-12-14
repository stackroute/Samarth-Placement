(function(){
  'use strict'
angular
   .module('samarth.jobSearch')  
   .factory("jobSearchFactory", ['$http',function($http){  
    var obj = {};
    obj.searchJobDetails = function(){ 
        //return $http.get('./samarth-webcomponents/jobSearch/jobSearchData/jobSearchData.json');
        return $http.get('/jobProfile/getJobs');
    }
    /*obj.searchJobDetails = function(jobID){ 
        //return $http.get('./samarth-webcomponents/jobSearch/jobSearchData/jobSearchData.json');
        return $http.get('/jobProfile/getJobs'+jobID);
    }*/
    return obj;
}]);
})();
   
